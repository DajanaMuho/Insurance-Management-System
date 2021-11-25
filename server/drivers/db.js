const mongoose = require('mongoose');

const connectDb = () => {
  return mongoose.connect("mongodb://localhost/managment", 
  {
    useNewUrlParser: true
  },);
};

module.exports = connectDb;