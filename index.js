const express = require("express");
const mongoose = require("mongoose");
const  studentRoutes = require("./route/studentRoutes");

const app = express();
app.use("/students", studentRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = 3000;

mongoose
  .connect("URL", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
