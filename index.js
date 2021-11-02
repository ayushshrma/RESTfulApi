const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

var port = process.env.PORT || 3000;

const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Configuring the data base
const mongoose = require('mongoose');
const db = require('./config/database');

//Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.


mongoose.Promise = global.Promise;

// connecting to the database
mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }).then (() => {
        console.log('Connected to database:: MongoDB');
    }).catch((err) => {
        console.log('Error connecting to database');
        console.log(err);
        
    });



app.get('/', (req, res) => {
  res.json({"Message":"Welcome to my application"});
});

// Require the movie route
require('./routes/route.js')(app);

//listen for request 
app.listen(port,() => {
    console.log(`Server listening on port ${port}`);
});


