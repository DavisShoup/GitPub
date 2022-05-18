const express = require('express');
const app = express();
const port = 3000;
const drinks = require('./models/drinks.js')
const foods = require('./models/foods.js')

app.listen(port, () => {
    console.log("listening!")
})

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
})

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', { drinks })
});

app.get('/drinks/:indexOfDrinks', (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.indexOfDrinks],
    });
});

// app.get('/drinks', (req, res) => {
//     res.render('food_index.ejs', { foods })
// });

