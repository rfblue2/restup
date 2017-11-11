// https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

// Declare express, mongoose, and import necessary pieces
var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  bodyParser = require('body-parser')
  
// Setup express
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Import routes
var routes = require('./routes/petsRoutes') //importing route
routes(app) //register the route

// Start the server!
app.listen(port, () => console.log('Pet server started on: ' + port))