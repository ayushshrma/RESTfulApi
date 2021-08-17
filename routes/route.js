module.exports = (app) => {
    const movies = require('../controllers/movie.controller');

    // create new movie
    app.post('/api/movies', movies.create);

    // get all movies
    app.get('/api/movies', movies.getAll);

    // get movie by id
    app.get('/api/movies/:id', movies.getById);

    // update movie
    app.put('/api/movies/:id', movies.update);

    // delete movie
    app.delete('/api/movies/:id', movies.delete);
};
