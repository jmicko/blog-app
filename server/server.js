// Grab express, it's going to be my web server
// This gives us the whole library
const express = require('express');

// Will need bodyParser for POST requests
const bodyParser = require('body-parser');

// This creates an instance of the express web server
const app = express();
const port = process.env.PORT || 5000;

// saving blogs
const blogs = []

// setup bodyParser to parse the body of our requests

    // jquery $.ajax uses url.encoded
app.use( bodyParser.urlencoded( {extended:true} ) );
    // axios (will see w/ React) uses json
app.use( bodyParser.json() );

// Setup static file service
app.use( express.static( 'server/public' ) )

// Start the server so it listens for requests
app.listen(port, () => {
    console.log(`Server on port: ${port} activated and active...`);
});


// ----------ROUTES GO IN HERE. THEY WILL CHANGE FOR EACH PROJECT----------

//  send information fromm the client into the server
app.post('/blogs', (req, res) => {
    console.log('Got blogs', req.body);
    blogs.unshift(req.body);
    res.sendStatus(201); // Created
})

//  send information fromm the server into the client
app.get('/blogs', (req, res) => {
    console.log('Getting blogs');
    res.send(blogs);
})
// --------------------------end of our routes--------------------------

