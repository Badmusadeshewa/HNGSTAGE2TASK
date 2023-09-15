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
router.post('/', createPerson);
router.get('/', getAllPerson);
router.get('/:id', getPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

module.exports = router;