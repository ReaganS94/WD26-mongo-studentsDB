const { restart } = require('nodemon');
const Students = require('../models/student')

const getAllStudents = async (req, res) => {
    try {
        const students = await Students.find();
        res.status(200).json({
            data: students
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err
        })
    }
}

const getOneStudent = async (req, res) => {
    try{
        const student = await Students.findById(req.params.id);
        res.status(200).json({
            data: student
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err,
            message: `User with id ${req.params.id} not found`
        })
    }
}

const createStudent = async (req, res) => {
    try {
        const { name, lastName, age, email, password, address, gender } = req.body;
        console.log(req.body);
        const student = await Students.create({ name, lastName, age, email, password, address, gender })
        res.json({
            student: student
        })
    } catch(err) {
        res.json({
            success: false,
            error: err
        })
        
    }
}

const updateStudent = async (req, res) => {
    try{
        const student = await Students.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json({
            student: student
        })
    } catch(err) {
        res.json({
            success: false,
            error: err
        })
    }
}

const deleteOne = async (req, res) => {
    try {
        await Students.findByIdAndDelete(req.params.id)
        res.json({
            success: true,
            message: "Student deleted"
        })
    } catch(err) {
        res.json({
            success: false,
            error: err
        })
    }
}



module.exports = {
    getAllStudents,
    getOneStudent,
    createStudent,
    updateStudent,
    deleteOne
};