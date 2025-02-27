const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs'); // EJS सेट करें
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public')); // Static files के लिए public फोल्डर

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

// Server Listen
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
