const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const veggieSchema = new Schema({
  veggie_name: {
    type: String,
    trim: true,
    required: true 
  }
})

module.exports = mongoose.model('Veggie', veggieSchema)