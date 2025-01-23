// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the comments route
app.use('/comments', require('./routes/comments'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});