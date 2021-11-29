const mongoose = require('mongoose');
const MONGO_URL = "mongodb+srv://dajana_muho:1234@cluster.ny8ct.mongodb.net/management?retryWrites=true&w=majority";

const connectDb = () => {
  return mongoose.connect(MONGO_URL, 
  {
    useNewUrlParser: true,
    autoIndex: false,
    useUnifiedTopology: true,
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 1000,
    poolSize: 10,
    keepAlive: 120,
    // If not connected, model return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    bufferCommands: false,
  },);
};

module.exports = connectDb;