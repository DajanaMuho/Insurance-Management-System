const mongoose = require('mongoose');
const MONGO_URL = process.env. MONGO_URI || "mongodb://localhost/managment";

const connectDb = () => {
  return mongoose.connect(MONGO_URL, 
  {
    useNewUrlParser: true
  },);
};

module.exports = connectDb;