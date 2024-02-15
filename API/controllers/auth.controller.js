import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { fullName,username, email, password } = req.body;
  //hashing the password
  const hashedPwd = bcryptjs.hashSync(password, 10);

  const newUser = new User({ fullName,username, email, password: hashedPwd });

  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    next(error)
  }
};
