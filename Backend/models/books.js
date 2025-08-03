const mongoose = require("mongoose");

const mSchema = mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  catogery: String,
  image: String,
});

const Book = mongoose.model("Book", mSchema);

module.exports = Book;
