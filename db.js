const mongoose = require('mongoose');
global.mongoose = mongoose
require('dotenv').config()

const DATABASE_URL = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@gic.cbipwdl.mongodb.net/GIC`;

if (!DATABASE_URL) {
  throw new Error("please provide the databse connection url");
}

const opts = {
  bufferCommands: false,
};

let cached = global.mongoose

if (!cached){
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(DATABASE_URL, opts).then((mongoose) => {
      console.log("database connection success")
      return mongoose
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
module.exports = connectDB;
