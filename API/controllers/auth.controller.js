import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

//function for sign up
export const signup = async (req, res, next) => {
  const { fullName, username, email, password } = req.body;
  //hashing the password
  const hashedPwd = bcryptjs.hashSync(password, 10);

  const newUser = new User({ fullName, username, email, password: hashedPwd });

  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    next(error);
  }
};

//function for sign in
export const signin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const userExists = await User.findOne({ username }); // cheack whether user exist in DB
    if (!userExists) {
      return next(errorHandler(404, "Username not found"));
    }
    const validPwd = bcryptjs.compareSync(password, userExists.password);
    if (!validPwd) {
      return next(errorHandler(401, "Invalid Username or Password!!!"));
    }
    const token = jwt.sign({ id: userExists._id }, process.env.TOKEN_SCRT); //token scrt is in .env

    //crating a cookie to save user data in the broser

    res
      .cookie("access-token", token, { HttpOnly: true })
      .status(200)
      .json({ userExists });
  } catch (error) {
    next(error);
  }
};
