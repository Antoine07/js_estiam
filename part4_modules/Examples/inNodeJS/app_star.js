import { start } from 'repl';
// vous devez nommer l'export par défaut le reste exports multiples peut se nommer avec un nouveau namespace 
import Star, * as star from './core/Star.js';

console.log(star.API_KEY);
console.log(star.API_URL);

console.log(star.NUMBER_STAR);

console.log(star.degree(100));

const s = new Star('Soleil');

console.log(s.name)