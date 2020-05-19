const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  ISBN: {
    type: String
  },
  Title: {
    type: String
  },
  Author: {
    type: String
  },
  Price: {
    type: Number
  },
  SellerEmail: {
    type: String,
    },
    Used: {
      type: Boolean
    },
    Location: {
      City: {
        type: String
      },
      Street: {
        type: String
      }
    }
  });

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;