const axios = require('axios');
const Restaurant = require('../models/restaurant');
const mongoose = require('mongoose');

// Obtener restaurante por ID desde el API
exports.getRestaurantById = async (restaurantId) => {
  try {
    const response = await axios.get(`${process.env.RESTAURANT_API_URL}/${restaurantId}`);
    return response.data; // Devolvemos los datos del restaurante
  } catch (error) {
    console.error('Error fetching restaurant by ID:', error.message);
    return null; // Retornamos null si no se encuentra
  }
};

// Eliminar restaurante de la base de datos
exports.deleteRestaurant = async (restaurantId) => {
  try {
    const result = await Restaurant.findByIdAndDelete(new mongoose.Types.ObjectId(restaurantId));
    if (!result) {
      throw new Error('Restaurant not found');
    }
    console.log(`Restaurant with ID ${restaurantId} deleted`);
    return result;
  } catch (error) {
    console.error('Error deleting restaurant from DB:', error);
    throw error;
  }
};
