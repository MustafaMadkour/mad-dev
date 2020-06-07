// required modules
const express = require('express');
const path = require('path');

// App variables
const app = express();
const port = process.env.PORT || '8000';

// App configuration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// Routes definations
app.get('/', (req, res) => {
	res.render('index', { title: 'Home' });
});

// Server Activation
app.listen(port, () => {
	console.log(`Listening to requests on http://localhost:${port}`);
});
