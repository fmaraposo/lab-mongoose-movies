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

router.get('/movies/:id', (req,res,next) => {
    let movieId = req.params.id;
    Movie.findById(movieId)
    .then((theMovieFound) => {
        console.log(`We're going to check the details of: ${theMovieFound}`);
        res.render('movies/show', {movie: theMovieFound});
    })
    .catch((next) => {
        console.log(`Houston we have a problem: ${next}`);
    });
});

//Create new movies

router.get('/movies/create', (req,res,next) => { 
    res.render('movies/new');
});

router.post('/movies/create',(req,res,next) => {
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
        console.log(`Houston we have a problem: ${next}`);
        res.render('movies/new');
    });
});


module.exports = router;