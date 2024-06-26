const mongoose = require('mongoose')
console.log(mongoose.models);
const DATABASE_URL = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@gic.cbipwdl.mongodb.net/GIC`

if(! DATABASE_URL) {
    throw new Error("please provide the databse connection url")
}

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

export default connectDB
