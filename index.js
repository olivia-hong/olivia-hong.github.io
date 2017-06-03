'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 8080; //checks if PORT var exists,
									 //if doesn't exist, set port to 8080 for deployment

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/about.html');
});

app.get('/contact', function (req, res) {
  res.sendFile(__dirname + '/contact.html');
});

app.use(function (req, res) {
  res.status(404).sendFile(__dirname + '/404.html');
});

app.listen(port, function() {
  console.log('Web server listening on port ' + port + '!');
});