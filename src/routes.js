const {
  addBook,
  getAllBooks,
  getBookById,
  editBookById,
  deleteBookById,
} = require('./handler');

// POST Route
const posts = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
];

// GET Route
const gets = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById,
  },
];

// PUT Route
const puts = [
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookById,
  },
];

// DELETE Route
const deletes = [
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookById,
  },
];

module.exports = {
  posts, gets, puts, deletes,
};
