'use strict';

import Dragon from './Dragon.js';
import Knight from './Knight.js';
import Game from './Game.js';

const tyson = {
    name : 'Tyson',
    force : 0.9,
    shot : 0,
    life: 130
}

const dragon = new Dragon(tyson);

// console.log(dragon);

const gaheris = {
    name : 'Gaheris',
    force : .8,
    shot : 0,
    life: 100
}

const knight = new Knight(gaheris);

const game = new Game(knight, dragon);

// lancer le jeu 
game.run();

console.log('winner', game.winner);