// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'view' directory
app.use(express.static('view'));

// Define a route to render an EJS template
app.get('/', (req, res) => {
    res.render('\index.ejs');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
