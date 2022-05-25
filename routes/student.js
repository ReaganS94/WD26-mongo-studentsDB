const express = require('express');
const app = express.Router();
const { getAllStudents, getOneStudent, createStudent, updateStudent, deleteOne } = require('../controllers/student');

app.route("/").get(getAllStudents).post(createStudent);
app.route("/:id").get(getOneStudent).put(updateStudent).delete(deleteOne)

module.exports = app;