const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

router.post("/add", async (req, res) => {
  const { name, age, class: className } = req.body;
  const student = new Student({ name, age, class: className });
  await student.save();
  res.json(student);
});

router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

router.put("/update/:id", async (req, res) => {
  const { name, age, class: className } = req.body;
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    { name, age, class: className },
    { new: true }
  );
  res.json(student);
});

router.delete("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted successfully" });
});

module.exports = router;