const express = require("express");
const {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController.js");
const { authenticateToken } = require("../middleware/authMiddleware.js");

const router = express.Router();

// GET all books
router.get("/", authenticateToken, getAllBooks);

// POST create a new book
router.post("/", authenticateToken, createBook);

// PUT update a book by ID
router.put("/:id", authenticateToken, updateBook);

// DELETE delete a book by ID
router.delete("/:id", authenticateToken, deleteBook);

module.exports = router;
