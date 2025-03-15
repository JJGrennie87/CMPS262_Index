const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the homepage
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Express App!</h1>');
});

// About route
app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>This is a simple Express application.</p>');
});

// Contact route (serves a form)
app.get('/contact', (req, res) => {
    res.send(`
        <h1>Contact Page</h1>
        <form action="/contact" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea><br><br>
            
            <button type="submit">Submit</button>
        </form>
    `);
});

// Handle form submission
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    res.send(`<h1>Thank you, ${name}!</h1><p>We have received your message: ${message}</p>`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

