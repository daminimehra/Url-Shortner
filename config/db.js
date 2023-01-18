const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    mongoose.connect("mongodb://localhost/urlShortener", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Conneced");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
