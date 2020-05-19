const mongoose = require('mongoose')
const Book = require('./book.js')

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/books2"

const connectDb = () => {
  return mongoose.connect(uri, { useNewUrlParser: true });
};

module.exports = {
  connectDb,
    models: {
      Book
    }
} 