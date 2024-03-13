import Job from "../models/vacancy.model.js";

export const create = async (req, res, next) => {
  const newJob = new Job({
    ...req.body,
  });

  try {
    const savedJob = await newJob.save() 
    res.status(201).json(savedJob);

    
  } catch (error) {
    next(error)
  }
};
