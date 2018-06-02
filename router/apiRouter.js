const express = require('express');
const GameModel = require('../models/game.model');

let Router = express.Router();

Router.post('/games', function(req, res) {
    console.log("reqBody", req.body);
    req.body = {
        player1: { name : req.body.player1 },
        player2: { name : req.body.player2 },
        player3: { name : req.body.player3 },
        player4: { name : req.body.player4 }
    }
    GameModel
    .create(req.body    )
    .then(function (gameCreated) {
        res.send({success: 1, gameId: gameCreated._id});
    })
    .catch(function (err) {
        res.status(502).send({success: 0, err: err})
    });
});

// Router.get('/games', async (req, res) => {
//     try {
//         let game = await GameModel.find({}).exec();
        
//     } catch (error) {
//         if(err) res.status(502).send({success: 0, err: err})
//     }
    
// });

module.exports = Router;