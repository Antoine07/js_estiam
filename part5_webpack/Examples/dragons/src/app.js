import { addDragons } from './core/utils'; // export normal nommé

import dragons from './core/dragons'; // export default peut être renommé

const main = document.getElementById('main');

document.body.onload = addDragons(main, dragons) ;