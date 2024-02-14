import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // for hidden url
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.DbURI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.use("/API/auth", authRouter);
