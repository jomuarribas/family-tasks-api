const mongoose = require('mongoose');

const familyTasksDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Sucessfully connecter to the DDBB');
  } catch (err) {
    console.error("Conection error: " + err.message);
  }
};

module.exports = { familyTasksDB };