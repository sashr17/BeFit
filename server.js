//server.js
'use strict';
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Issue = require('./model/issue');
//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set
//it up, or 3001
var port = process.env.API_PORT || 3001;

//db config
mongoose.connect('mongodb://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@ds139082.mlab.com:39082/befit');

//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});
//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

router.route('/issues')
.get(function (req, res) {
     //looks at our Comment Schema
     Issue.find(function(err, issues) {
     if (err)
     res.send(err);
     //responds with a json object of our database comments.
     res.json(issues)
     });
});

router.route('/addissue')
//post new issue to the database
.post(function(req, res) {
    var issue = new Issue();
    //body parser lets us use the req.body
    issue.project = req.body.project;
    issue.id = req.body.id;
    issue.summary = req.body.summary;
    issue.save(function(err) {
        if (err)
        res.send(err);
        res.json({ message: 'Issue successfully added!' });
    });
 });

//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
