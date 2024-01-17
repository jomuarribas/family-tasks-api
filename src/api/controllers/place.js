const Place = require("../models/place.js");
const { deleteImg } = require("../utils/deleteImg.js");

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
    if (req.file) {
      addPlace.img = req.file.path;
    }
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
    deleteImg(placeDeleted.img);
    return res.status(200).json("Lugar eliminado")

  } catch (err) {

    return res.status(400).json('El lugar no ha podido eliminarse');
  }
};

// UPDATE PLACE
const updatePlaces = async (req, res, next) => {
  try {
    const { id } = req.params

    const newPlace = new Place(req.body)
    newPlace._id = id

    if (req.file) {
      const OldPlaceImg = await Place.findById(id);
      deleteImg(OldPlaceImg.img);
      newPlace.img = req.file.path;
    }

    const placeUpdate = await Place.findByIdAndUpdate(id, newPlace, { new: true })

    return res.status(200).json(placeUpdate)

  } catch (err) {

    return res.status(400).json('El lugar no ha podido actualizarse');

  }
};

module.exports = { getPlaces, addPlaces, deletePlaces, updatePlaces };
