require('dotenv').config();  // Load environment variables from .env file
//Frame 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const myDb = require ('./config/database.js');
const { ObjectId } = require('mongodb');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// importing routes
const route = require('./route/route');

app.use('/api', route);


// Start the Express server
app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
  });
