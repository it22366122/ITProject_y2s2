import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(
    process.env.DbURI
  )
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
