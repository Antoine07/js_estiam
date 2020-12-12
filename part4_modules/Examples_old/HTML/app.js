"use strict";

import { API, PASS } from './config.js'; // plusieurs export

/*
* On peut renommer un export default
* la fonction dans le fichier core/parse.js se nome parse
*/
import parseDigit from './core/parse.js'; // export default

console.log(`API : ${API}`);
console.log(`PASS : ${PASS}`);

const phrase = 'Bonjour tout le monde:891819: on va voir les imports :   891819';
console.log(`Phrase parsing  ${parseDigit(phrase, ':')}`)