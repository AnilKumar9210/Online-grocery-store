import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;


dotenv.config ()

mongoose.connect(process.env.MONGO_URI, {autoIndex: true})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});