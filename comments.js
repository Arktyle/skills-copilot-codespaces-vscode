// Create web server using express
const express = require('express');
const app = express();
const port = 3000;

// Import comments data
const comments = require('./comments.json');

// GET request for comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST request for comments
app.post('/comments', (req, res) => {
  res.send('POST request received');
});

// PUT request for comments
app.put('/comments/:id', (req, res) => {
  res.send(`PUT request received for id ${req.params.id}`);
});

// DELETE request for comments
app.delete('/comments/:id', (req, res) => {
  res.send(`DELETE request received for id ${req.params.id}`);
});

// Listen to server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Run the server using node comments.js
// Open browser and go to http://localhost:3000/comments
// You will see the comments data in JSON format

// You can also test POST, PUT and DELETE requests using Postman
// POST request: http://localhost:3000/comments
// PUT request: http://localhost:3000/comments/1
// DELETE request: http://localhost:3000/comments/1