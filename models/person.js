const mongoose = require ('mongoose')

// Define a Person schema and model
const personSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true],
    },
    age: Number,
    email: {
          type: String,
          required: true,
          unique: true,
          lowercase: true,
          validate: (value) => {
            return validator.isEmail(value)
          }}
  });
  
  const Person = mongoose.model('Person', personSchema);