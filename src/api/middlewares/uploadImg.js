const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

const placeImg = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "family-tasks/placesImg",
    allowedFormats: ["jpg", "png", "jpeg", "gif"],
    transformation: [{ width: 200, height: 200, crop: 'fill' }]
  }
});

const taskImg = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "family-tasks/tasksImg",
    allowedFormats: ["jpg", "png", "jpeg", "gif"],
    transformation: [{ width: 200, height: 200, crop: 'fill' }]
  }
});

const userImg = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "family-tasks/usersImg",
    allowedFormats: ["jpg", "png", "jpeg", "gif"],
    transformation: [{ width: 200, height: 200, crop: 'fill' }]
  }
});

const upPlaceImg = multer({ storage: placeImg });
const upTaskImg = multer({ storage: taskImg });
const upUserImg = multer({ storage: userImg });

module.exports = { upPlaceImg, upTaskImg, upUserImg };