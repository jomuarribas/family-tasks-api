const { getPlaces, addPlaces, deletePlaces, updatePlaces } = require("../controllers/place");
const { isUser } = require("../middlewares/auth");
const { upPlaceImg } = require("../middlewares/uploadImg");

const placesRoutes = require("express").Router();

placesRoutes.get('/', [isUser], getPlaces);
placesRoutes.post('/', [isUser, upPlaceImg.single("img")], addPlaces);
placesRoutes.delete('/:id', [isUser], deletePlaces);
placesRoutes.put('/:id', [isUser, upPlaceImg.single("img")], updatePlaces)

module.exports = placesRoutes;