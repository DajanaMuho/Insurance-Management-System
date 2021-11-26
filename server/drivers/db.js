const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URI || "mongodb+srv://dajana_muho:<1234>@cluster.ny8ct.mongodb.net/management?retryWrites=true&w=majority";

const connectDb = () => {
  return mongoose.connect(MONGO_URL, 
  {
    useNewUrlParser: true
  },);
};

module.exports = connectDb;