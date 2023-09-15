const express = require ('express');
const mongoose = require ('mongoose');
const person = require('../models/person');

const app = express();

// Create person
const createPerson = (req, res) => {
    const person = {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email
    };
  
    // Save the person to the database
    // person.save((err, person) => {
    //         if (err) {
    //          return res.status(500).json({ error: 'Error creating a person in the database.' });
    //           }
          
    //          res.json(person);
    //         });
            
            // Return the success message
    res.status(200).send({ message: 'Person created successfully' });
  };
  
  const getAllPerson = (req, res) => {
    // Get all people from the database
    // ...
  
    // Return the people
    res.status(200).send({ people });
  };
  
  const getPerson = (req, res) => {
    // Get the person by ID from the database
    // ...
  
    // Return the person
    res.status(200).send({ person });
  };
  
  const updatePerson = (req, res) => {
    const { id, name, age } = req.body;
  
    // Update the person in the database
    // ...
  
    // Return the success message
    res.status(200).send({ message: 'Person updated successfully' });
  };
  
  const deletePerson = (req, res) => {
    const id = req.params.id;
  
    // Delete the person from the database
    // ...
  
    // Return the success message
    res.status(200).send({ message: 'Person deleted successfully' });
  };
 module.exports = { createPerson, getAllPerson, getPerson, updatePerson, deletePerson };

 