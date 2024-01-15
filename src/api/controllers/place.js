const Place = require("../models/place.js");

// GET ALL
const getPlaces = async (req, res, next) => {
  try {
    const allPlaces = await Place.find()
    return res.status(200).json(allPlaces);

  } catch (err) {
    return res.status(400).json(err.message);

  }
};

// POST ADD PLACE
const addPlaces = async (req, res, next) => {
  try {

    const addPlace = new Place(req.body);
    const savePlace = await addPlace.save();

    return res.status(201).json("Place has beed added");

  } catch (err) {
    return res.status(400).json(err.message);

  }
};

// DELETE PLACE
const deletePlaces = async (req, res, next) => {
  try {
    const { id } = req.params;
    const placeDeleted = await Place.findByIdAndDelete(id);
    return res.status(200).json("Lugar eliminado")

  } catch (err) {

    return res.status(400).json('El lugar no ha podido eliminarse');
  }
};

module.exports = { getPlaces, addPlaces, deletePlaces };
