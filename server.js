var express = require('express');        
var app = express();   
var cors = require('cors');              
var bodyParser = require('body-parser');
var posts = require('./post.js');

// POINT 1. Enable CORS

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// POINT 2. Set a static file for “frontend” folder
app.use(express.static('frontend'));

var port = process.env.PORT || 8080;        // set our port

var router = express.Router();              // get an instance of the express Router



// POINT 3. Set API routing to functions in post.js

router.get('/posts',posts.getAllPosts);
app.get('/posts/user',posts.getPostsByUser);
//app.get('/posts/insert',posts.insertNewPosts);

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', cors(), router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);