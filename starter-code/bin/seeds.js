const mongoose = require('mongoose');
/* const Celebrity = require('../models/Celebrity.js'); */
const Movie = require('../models/Movie.js');
const DB_NAME = 'movies-project';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

/* const celebrities = [
    {
        name: 'Al Pacino',
        occupation: 'Actor',
        catchPhrase: 'Say hello to my little friend'
    },
    {
        name: 'Ali G',
        occupation: 'G',
        catchPhrase: 'Is Disneyland a part of the UN?'
    },
    {
        name: 'Dwight Schrutte',
        occupation: 'Assitant to the Regional Manager',
        catchPhrase: 'I am fast. To give you a reference point I am somewhere between a snake and a mongoose… And a panther.'
    }
];

Celebrity.create(celebrities)
    .then(celebritiesFromDB => {
        console.log(`Created ${celebritiesFromDB.length} celebrities`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error ocurred while creating celebreties: ${err}`)); */

    const movies = [
        {
            title: 'Meet the Fockers',
            genre: 'Comedy',
            plot: 'Two years after the events of the first film, Gaylord "Greg" Focker and his fiancée Pam Byrnes decide to introduce their parents to each other. They first fly to Oyster Bay, New York, to pick up Pam\'s father, retired CIA operative Jack Byrnes, her mother Dina and one-year-old nephew Little Jack. Rather than going to the airport as planned, Jack decides to drive the family to Miami to meet Greg\'s parents in his new RV.'
        },
        {
            title: 'Scarface',
            genre : 'crime drama',
            plot: "In 1980, Cuban refugee and ex-convict Tony Montana arrives in Miami, Florida, as part of the Mariel boatlift, where he is sent to a refugee camp with friends Manny Ray, Angel, and Chi Chi. The four are released and given green cards in exchange for murdering a former Cuban general at the request of Miami drug lord Frank Lopez. They become dishwashers at an eatery, but a dissatisfied Tony proclaims that he is meant for bigger things."
        }, 
        {
            title: 'Ali G Indahouse',
            genre: 'Comedy',
            plot: "Ali G is the leader of Da West Staines Massiv, a fictional gang composed of wannabe gangsters from Staines. Their chief rivals are Da East Staines Massiv. Da West Staines Massiv are heartbroken to learn that their beloved hangout - the John Nike Leisure Centre, where Ali teaches a life support group for young schoolboys, will be demolished by the local council so they decide to protest."
        }
    ];

Movie.create(movies)
    .then(moviesFromDB => {
        console.log(`Created ${moviesFromDB.length} movies`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error ocurred while creating celebreties: ${err}`)); 