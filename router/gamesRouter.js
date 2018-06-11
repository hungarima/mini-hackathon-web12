const express = require('express');
const fs = require('fs');

let Router = express.Router();
// Khi làm việc với database sẽ chỉ làm việc với model, schema chỉ là cái khung
const GameModel = require('../models/game.model');


GameModel.find({}, function (err, games) {
    
})

Router.use(function(req,res,next){
    next();
})




Router.get('/:id', function(req, res) {
    let gameId = req.params.id;
    try{
    GameModel.findById(gameId, function(err, gameFound) {
        if(err) console.log(err)
        else{
            
        res.render('games', {
            player1: gameFound.player1,
            player2: gameFound.player2,
            player3: gameFound.player3,
            player4: gameFound.player4
        });
    }
    });
    } catch(error){
        console.log("Exception: "+ error);
    }
});





module.exports = Router;


