const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/dashboard"

const connectToMongo = async() => {
   await  mongoose.connect(mongoURI)
   console.log('Connected to Mongoose succesfully');
}

module.exports = connectToMongo;