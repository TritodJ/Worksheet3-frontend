// db.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb+srv://trj07052002:trj07052002@cluster0.wzu3elk.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;