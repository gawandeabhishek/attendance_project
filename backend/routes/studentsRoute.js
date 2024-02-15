import express from "express";
import { Student } from "../models/studentModel.js";

const router = express.Router();

// Route to save a new Book
router.post("/login", async (req, res) => {
  try {
    if (!req.body.name || !req.body.rollNo || !req.body.photo) {
      return res.status(400).send({
        message: "Send all required fields: name, rollNo, photo",
      });
    }
    const newStudent = new Student(req.body);
    const student = await newStudent.save();

    return res.status(201).send(student);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route to get all Students from Database
router.get("/", async (req, res) => {
  try {
    const students = await Student.find({});

    return res.status(200).json({
      count: students.length,
      data: students,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// Route to get one student from database by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);

    if(!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    return res.status(200).json(student);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// Route to update student info
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.name || !req.body.rollNo || !req.body.photo) {
      return res.status(400).send({
        message: "Send all required fields: name, rollNo, photo",
      });
    }

    const { id } = req.params;

    const result = await Student.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Student not found" });
    }

    return res
      .status(200)
      .send({ message: "Student info updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// Route for Delete a  student
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Student.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Student not found" });
    }

    return res.status(200).send({ message: "Student deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;