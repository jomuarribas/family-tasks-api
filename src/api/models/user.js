const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
    year: { type: Number, trim: true, required: true },
    img: { type: String, trim: true, required: true },
    rol: { type: String, enum: ["administrador", "usuario"], trim: true, required: true }
  },
  {
    collection: "users"
  }
);

userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10)

});

const User = mongoose.model('User', userSchema, 'users');
module.exports = User;