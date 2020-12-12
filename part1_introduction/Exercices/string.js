
const sentence = "Bonjour tout le monde, vous aimez JS ?";

const countCharacters = sentence
    .replace(/,/g, '')
    .split(' ')
    .filter(s => [',', '?', '.', '...'].includes(s) === false)
    .map(w => w && w.length);

console.log(countCharacters);