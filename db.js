const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://originclg2025_db_user:5GbwOH6fz9llXc3C@i2sdac.omdtjiq.mongodb.net/?appName=i2sdac",
    )
    .then((result) => {
      console.log("connected....");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { mongoose, connectDB };
