// app.js
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;


// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set("views" , path.join(__dirname ,"views"));

// Serve static files from the 'view' directory
app.use(express.static('views'));   
app.use('/public' , express.static(path.join(__dirname , 'public'))); 

// Define a route to render an EJS template
app.get('/', (req, res) => {
    res.render('\index.ejs');   // tum ye static files code dekhlo okyad karlo haa thik hai aur ek aur chej yeh backend m jo server.js hai isko chatbot.ejs m kaise add karu ya phir uska data mongoose ki help se lelu
    
});
app.get('/about', (req, res) => {
    res.render('\about.ejs');
});
app.get('/depress', (req, res) => {
    res.render('\depress.ejs');
});
app.get('/anxiety', (req, res) => {
    res.render('\Anxiety.ejs');
});
app.get('/bipolar', (req, res) => {
    res.render('\ipolar.ejs');
});
app.get('/depr', (req, res) => {
    res.render('\depr.ejs');
});
// app.get('/chatbot', (req, res) => {
//     res.render('\input.ejs');
// });
app.get('/contact', (req, res) => {
    res.render('\contact.ejs');
});
app.get('/appointment', (req, res) => {
    res.render('\appointment.ejs');
});

app.post('/result', async (req, res) => {
    try {
        // Get user input
        const conditionName = req.body.conditionName;

        // Find the condition in the database
        const condition = await Medical.findOne({ 'conditions.name': conditionName });

        if (!condition) {
            res.render('error', { message: 'Condition not found' });
            return;
        }

        // Render the result using EJS
        res.render('result', { condition });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});




// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
