const express = require ('express');
const mongoose = require ('mongoose');

const app = express();

const {
  createPerson,
  deletePerson,
  getAllPerson,
  getPerson,
  updatePerson,
}= require( '../Controller/personcontroler');

const router = require('express').Router();

// Route handlers
router.post('/person', createPerson);
router.get('/person', getAllPerson);
router.get('/person/:id', getPerson);
router.put('/person/:id', updatePerson);
router.delete('/person/:id', deletePerson);

module.exports = router;