const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

//List the Movies

router.get('/movies', (req,res) => {
    Movie.find()
    .then((allMoviesFromDB) => {
        console.log(`Our movies are displayed, ${allMoviesFromDB}`);
        res.render('movies/index', {movies:allMoviesFromDB});
    }).catch((err) => {
        console.log(`Houston we have a problem: ${err}`);
    });
});

//Create new movies

router.get('/movies/new', (req,res,next) => { 
    res.render('movies/new');
});

router.post('/movies/new',(req,res,next) => {
    let {title, genre, plot} = req.body;
    console.log(req.body);
    Movie.create({
        title: title,
        genre: genre,
        plot:plot
    })
    .then((response) => {
        console.log(`The movie was created: ${response.title}`);
        res.redirect('/movies');
    })
    .catch((next) => {
        console.log(`Houston2 we have a problem: ${next}`);
        res.render('movies/new');
    });
});

router.get('/movies/:id', (req,res,next) => {
    let movieId = req.params.id;
    Movie.findById(movieId)
    .then((theMovieFound) => {
        console.log(`We're going to check the details of: ${theMovieFound}`);
        res.render('movies/show', {movie: theMovieFound});
    })
    .catch((next) => {
        console.log(`Houston3 we have a problem: ${next}`);
    });
});

// Delete Movies
router.post('/movies/:id/delete', (req,res,next) => {
    let movieId = req.params.id;
    let {title, genre, plot} = req.body;
    console.log(req.body);
    Movie.findByIdAndDelete(movieId)
    .then((response) => {
        console.log(`${response.name} was deleted`);
        res.redirect('/movies');
    })
    .catch((next) => {
        console.log(`Houston we have a problem: ${next}`);
    });
});

module.exports = router;