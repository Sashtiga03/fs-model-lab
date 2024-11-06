const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests

// MongoDB connection


mongoose.connect('mongodb://localhost:27017/employeeDB')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error: ', err));


// Routes
app.use('/api/employees', employeeRoutes);

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


