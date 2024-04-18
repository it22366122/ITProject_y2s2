import Application from "../models/application.model.js";

export const submitapplication = async (req, res, next) => {
  const newApp = new Application({
    ...req.body,
  });
  try {
    const savedApp = await newApp.save();
    res.status(201).json(savedApp);
  } catch (error) {
    next(error);
  }
};
