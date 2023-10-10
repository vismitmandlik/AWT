// Create CRUD Operation page using ExpressJs, MongoDB 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// Middleware for parsing JSON requests
app.use(bodyParser.json());


// Configure your routes here


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dbs', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});


mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});


const crudRoutes = require('./routes/crud'); // Importing the CRUD routes


// Mount CRUD routes
app.use('/api', crudRoutes);
