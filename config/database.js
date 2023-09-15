const mongoose = require ('mongoose')
const MONGO_URI =process.env.MONGO_URI 
const database = 'hngtaskstage2db';   
class Database {
  constructor() {
    this._connect()
  }
  _connect() {
    // Connect to the database
     mongoose.connect(`${MONGO_URI}/${database}`)
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
      });
    }
    }

  module.exports = new Database();