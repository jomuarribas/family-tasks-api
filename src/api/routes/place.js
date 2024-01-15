const { getPlaces, addPlaces, deletePlaces } = require("../controllers/place");
const { isUser } = require("../middlewares/auth");

const placesRoutes = require("express").Router();

placesRoutes.get('/', [isUser], getPlaces);
placesRoutes.post('/', [isUser], addPlaces);
placesRoutes.delete('/:id', [isUser], deletePlaces);

module.exports = placesRoutes;