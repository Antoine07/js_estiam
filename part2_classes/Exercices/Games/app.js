'use strict';

import Dragon from './Dragon.js';
import Knight from './Knight.js';

import Game from './Game.js';

const tyson = {
    name : 'Tyson',
    force : 1,
    shot : 0,
    life : 100
}
const dragon = new Dragon(tyson);

const gaheris = {
    name : 'Gaheris',
    force : 0.9,
    shot : 0,
    life : 100
}

const knight = new Knight(gaheris);


console.log(knight, dragon);