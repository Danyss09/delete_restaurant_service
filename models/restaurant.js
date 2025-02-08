const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  cuisine: String,
  phone: String,
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema);
