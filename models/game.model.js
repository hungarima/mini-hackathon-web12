const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let playerSchema = new Schema({
    name: {type: String, required: true},
    score: [{type: Number}]
})

let GameSchema = new Schema ({
    player1: playerSchema,
    player2: playerSchema,
    player3: playerSchema,
    player4: playerSchema,

})

module.exports = mongoose.model("Game", GameSchema);