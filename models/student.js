const mongoose = require('mongoose');

// const { Schema } = mongoose;

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please use a valid email"]
    },
    address: {
        type: String
    },
    gender: {
        type: String
    },
    password: {
        type: String,
        required: true,
        minlength: 10
    }
});

module.exports = mongoose.model("Student", StudentSchema)