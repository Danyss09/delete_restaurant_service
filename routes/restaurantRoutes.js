const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Route to delete restaurant by ID
router.delete('/restaurants/:id', restaurantController.deleteRestaurant);

module.exports = router;
