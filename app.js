const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require("body-parser");
const fs = require('fs');
const mongoose = require('mongoose');

const GameModel = require('./models/game.model');

mongoose.connect('mongodb://localhost/minihack', function (err) {
    if (err) console.log(err);
    else console.log("DB connect success!");
});
GameModel.find({}, function (err, questions) {
    
})

const gamesRouter = require('./router/gamesRouter');
const apiRouter = require('./router/apiRouter');

let app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

// declare a new engine named 'handlebars from  'handlebars({defaultLayout: 'main'})'
app.engine("handlebars", handlebars({
    defaultLayout: 'main'
}));
// Set view app's view engine is 'handlebars' already declared above
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
    res.render('home');
})

app.use('/games', gamesRouter);

app.use('/api', apiRouter);






// app.use(express.static('public'));

// app.use(function (req, res, next) {

//     res.send('Not Found');

// });

app.listen(8080, function (err) {
    if (err) console.log(err);
    else console.log("Server is up!");

});