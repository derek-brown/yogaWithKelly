var mongoose = require('mongoose');

var YogaSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  description: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Yoga', YogaSchema);