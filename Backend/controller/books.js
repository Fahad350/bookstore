import book from "../models/books.js";

export const getBooks = async (req, res) => {
  try {
    const Book = await book.find();
    res.status(200).json(Book);
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json(error);
  }
};
