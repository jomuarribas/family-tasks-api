const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    home: { type: Boolean, required: true },
    img: { type: String, required: true },
  },
  {
    collection: "places"
  },
);

const Place = mongoose.model('Place', placeSchema, "places");
module.exports = Place;