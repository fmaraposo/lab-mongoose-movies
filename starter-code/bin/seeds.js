const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.js');
const DB_NAME = 'movies-project';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
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
    .catch(err => console.log(`An error ocurred while creating celebreties: ${err}`));