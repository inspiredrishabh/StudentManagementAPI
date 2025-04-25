const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const studentRoutes = require("./route/studentRoutes");

dotenv.config();

const app = express();
app.use("/students", studentRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
