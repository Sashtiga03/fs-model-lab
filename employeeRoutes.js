const express = require('express');
const Employee = require('../models/Employee');

const router = express.Router();

// Create new employee
router.post('/', async (req, res) => {
    const { name, position, department, salary } = req.body;

    const newEmployee = new Employee({ name, position, department, salary });

    try {
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get employee by ID
router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update employee
router.put('/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete employee
router.delete('/:id', async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

// Route to get all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees); // Return employees as JSON
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

