import Job from "../models/vacancy.model.js";

export const create = async (req, res, next) => {
  const newJob = new Job({
    ...req.body,
  });

  try {
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    next(error);
  }
};

export const getjobs = async (req, res, next) => {
  try {
    const start = parseInt(req.query.start) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sort = req.query.order === "asc" ? 1 : -1;

    const job = await Job
      .find({
        ...(req.query.userId && { userId: req.query.userId }),
        ...(req.query.category && { category: req.query.category }),
        ...(req.query.search && {
          title: { $regex: req.query.search, $options: "i" },
        }),
      })
      .sort({ updatedAt: sort })
      .skip(start)
      .limit(limit);

      const totalVacancy = await Job.countDocuments();  //to count total vacs in db

      res.status(200).json({
        totalVacancy,
        job
      });




  } catch (error) {
    next(error);
  }
};
