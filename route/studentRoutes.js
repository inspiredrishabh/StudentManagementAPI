const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/add", async (req, res) => {
  try {
    const { name, age, class: className } = req.body;

    if (!name || !age || !className) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const student = new Student({ name, age, class: className });
    await student.save();
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { name, age, class: className } = req.body;

    if (!name || !age || !className) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingStudent = await Student.findById(req.params.id);
    if (!existingStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { name, age, class: className },
      { new: true }
    );
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const existingStudent = await Student.findById(req.params.id);
    if (!existingStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
