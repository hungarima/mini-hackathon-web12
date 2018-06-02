const express = require('express');
const fs = require('fs');
let Router = express.Router();
// Khi làm việc với database sẽ chỉ làm việc với model, schema chỉ là cái khung
const GameModel = require('../models/game.model');


GameModel.find({}, function (err, games) {
    console.log(games);
})

Router.use(function(req,res,next){
    next();
})




Router.get('/:id', function(req, res) {
    let gameId = req.params.id;
    GameModel.findById(questionId, function(err, questionFound) {
        res.render('question', {
            player1: questionFound,
            totalVote: questionFound ? questionFound.yes + questionFound.no : 0
        });
    });
})


module.exports = Router;


