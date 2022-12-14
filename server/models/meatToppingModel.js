const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const meatSchema = new Schema({
  meat_name: {
    type: String,
    trim: true,
    required: true
  }
})

module.exports = mongoose.model('Meat', meatSchema);