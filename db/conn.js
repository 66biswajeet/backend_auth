const mongoose = require("mongoose");

URI = process.env.MONGO_URI;

// mongoose.connect(URI);

const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("msg from conn.js");
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
};

module.exports = connectdb;
