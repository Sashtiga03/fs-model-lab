const mongoose = require('mongoose');

// Define schema
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

// Create model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

