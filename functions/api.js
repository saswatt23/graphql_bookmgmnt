const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

// Sample records (replace this with your actual data)
let books = [
  { id: '1', title: 'Book 1', author: 'Author 1' },
  { id: '2', title: 'Book 2', author: 'Author 2' },
];

// Get all books
router.get('/books', (req, res) => {
  res.json(books);
});

// Get a single book by ID
router.get('/books/:id', (req, res) => {
  const { id } = req.params;
  const book = books.find(book => book.id === id);
  if (!book) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    res.json(book);
  }
});

// Add a new book
router.post('/books', (req, res) => {
  const { title, author } = req.body;
  const id = (books.length + 1).toString();
  const newBook = { id, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update an existing book
router.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const index = books.findIndex(book => book.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    books[index] = { ...books[index], title, author };
    res.json(books[index]);
  }
});

// Delete an existing book
router.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(book => book.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    const deletedBook = books.splice(index, 1)[0];
    res.json(deletedBook);
  }
});

app.use(express.json());
app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
