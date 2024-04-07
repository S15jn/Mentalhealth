const express = require('express');
const bodyParser = require('body-parser');
const { disconnect, connection } = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Route to handle incoming messages
app.post('/message', (req, res) => {
    const userMessage = req.body.message;

    // Check if user's message matches any data in the database
    const matchedIssue = database.find(issue => userMessage.includes(issue.name));

    if (matchedIssue) {
        // If there's a match, ask for symptoms related to that issue
        res.json({ response: matchedIssue.symptomsQuestion });
    } else {
        // If no match found, provide a generic response
        res.json({ response: "I'm sorry, I'm not sure what you're referring to. Can you provide more details?" });
    }
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
