
import Model, { PASS, LOGIN, find } from './core/Model.js';

console.log( find(10) );

document.getElementById('main').innerHTML = `<p>${find(10)}</p>` ;