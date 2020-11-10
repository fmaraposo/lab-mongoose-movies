const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

//List Our Celebrities
router.get('/celebrities', (req,res,next) => {
    //Get the Celebrities from Mongo
    Celebrity.find()
    .then((allCelebritiesFromDB) => {
        console.log(`Our celebrities are displayed, ${allCelebritiesFromDB}`);
        res.render('celebrities/index', {celebrities: allCelebritiesFromDB});
    })
    .catch((next) => {
        console.log(`Houston we have a problem: ${next}`);
    });
});

//Create a new Celebrity

router.get('/celebrities/new', (req,res,next) => { 
    res.render('celebrities/new');
});

router.post('/celebrities/new',(req,res,next) => {
    let {name, occupation, catchPhrase} = req.body;
    console.log(req.body);
    Celebrity.create({
        name: name,
        occupation: occupation,
        catchPhrase:catchPhrase
    })
    .then((response) => {
        console.log(`The celebrity was created: ${response.name}`);
        res.redirect('/celebrities');
    })
    .catch((next) => {
        console.log(`Houston we have a problem: ${next}`);
        res.render('celebrities/new');
    });
});

////////////////////////////////

//Route Celebrity ID
router.get('/celebrities/:id', (req,res,next) => {
    let celebrityId = req.params.id;
    Celebrity.findById(celebrityId)
    .then((theCelebrityFound) => {
        console.log(`We're going to check the details of: ${theCelebrityFound}`);
        res.render('celebrities/show', {celebrity: theCelebrityFound});
    })
    .catch((next) => {
        console.log(`Houston we have a problem: ${next}`);
    });
});

// Delete Celebrities
router.post('/celebrities/:id/delete', (req,res,next) => {
    let celebrityId = req.params.id;
    let {name, occupation, catchPhrase} = req.body;
    console.log(req.body);
    Celebrity.findByIdAndDelete(celebrityId)
    .then((response) => {
        console.log(`${response.name} was deleted`);
        res.redirect('/celebrities');
    })
    .catch((next) => {
        console.log(`Houston we have a problem: ${next}`);
    });
});



module.exports = router;