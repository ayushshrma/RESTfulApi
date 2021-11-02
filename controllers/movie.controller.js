const database = require('../config/database');
const Movie = require('../models/model');

//create and save a movie
exports.create = (req, res) => {
//valid request body.
    if(!req.body.title) {
        res.status(400).send({
            message: 'Title not Provided!!'
        });
        return;
    }
//create a new movie.
    const movie = new Movie({
        title: req.body.title,
        image: req.body.image,
        summary: req.body.summary
    });

//save movie to the database.
    movie.save()
    .then(data => {
        res.send(data);
        res.send({message: "Movie save Successfully!!."});
    }).catch(err => {
        res.status(400).send({
            message: err
        });
    });
  
};

// Retrieve and return all movies from the database.
exports.getAll = (req, res) => {
    Movie.find({})
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some Error occurred while retrieving movies!!."
        });
    });
};

// Retrieve and return a specific movie from the Database.
exports.getById = (req, res) => {
    Movie.findById(req.params.id)
    .then(data => {
        if(!data) {
            res.status(404).send({
                message: "Movie not found!!"
            });
        }
        res.json(data);
    }).catch(err => {
        if(err.message.includes("CastError")) {
            res.status(400).send({
                message: "Invalid movie!!"
            });
        }
        if(err.kind === 'ObjectId') {
            res.status(404).send({
                message: "Movie not found with ID: " + req.params.id
            });
        }
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving movie!!."
        });
    });
};

// Update a movie in the database by ID.
exports.update = (req, res) => {
 //valid request body
    if(!req.body.title) {
        res.status(400).send({
            message: "Invalid movie!!"
        });
    }
 //update movie in the Database.
    Movie.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        image: req.body.image,
        summary: req.body.summary
    }, {
        new: true
    })
    .then(data => {
        if(!data) {
            res.status(404).send({
                message: "Movie not found!!"
            });
        }
        res.send(data);
    }).catch(err => {
        if(err.message.includes("CastError")) {
            res.status(400).send({
                message: "Invalid movie!!"
            });
        }
        if(err.kind === 'ObjectId') {
            res.status(404).send({
                message: "Movie not found with ID: " + req.params.id
            });
        }
        res.status(500).send({
            message: err.message || "Some Error occurred while updating movie!!."
        });
    });
};

// Delete a movie from the Database by ID.
exports.delete = (req, res) => {
    Movie.findByIdAndRemove(req.params.id)
    .then(data => {
        if(!data) {
            res.status(404).send({
                message: "Movie not found!!"
            });
        }
        res.send({message: "Movie Deleted Successfully!!."});
    }).catch(err => {
        if(err.message.includes("CastError")) {
            res.status(400).send({
                message: "Invalid movie"
            });
        }
        if(err.kind === 'ObjectId') {
            res.status(404).send({
                message: "Movie not found with ID: " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete movie with ID: "+ req.params.id
        });
    });
}
