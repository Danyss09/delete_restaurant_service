const restaurantService = require('../services/restaurantService');

// Eliminar un restaurante por su ID
exports.deleteRestaurant = async (req, res) => {
  const restaurantId = req.params.id;

  try {
    const restaurant = await restaurantService.getRestaurantById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    // Llamamos al servicio para eliminar el restaurante
    await restaurantService.deleteRestaurant(restaurantId);
    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    console.error('Error deleting restaurant:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
