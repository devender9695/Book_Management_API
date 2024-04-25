const Book = require("../models/Book.js");
const { validateBookData } = require("../utils/validator.js");

async function getAllBooks(req, res) {
  try {
    const { author, publicationYear } = req.query;
    let filter = {};
    if (author) {
      filter.author = author;
    }
    if (publicationYear) {
      filter.publicationYear = publicationYear;
    }
    const books = await Book.find(filter);
    res.json(books);
  } catch (error) {
    console.error("Error getting books:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createBook(req, res) {
  try {
    const { title, author, publicationYear } = req.body;
    if (!validateBookData({ title, author, publicationYear })) {
      return res.status(400).json({ error: "Invalid book data" });
    }
    const newBook = new Book({ title, author, publicationYear });
    await newBook.save();
    res
      .status(201)
      .json({ message: "Book created successfully", book: newBook });
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function updateBook(req, res) {
  try {
    const { id } = req.params;
    const { title, author, publicationYear } = req.body;
    if (!validateBookData({ title, author, publicationYear })) {
      return res.status(400).json({ error: "Invalid book data" });
    }
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, publicationYear },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteBook(req, res) {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json({ message: "Book deleted successfully", book: deletedBook });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { getAllBooks, createBook, updateBook, deleteBook };
