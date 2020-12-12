const sentence = "Bonjour tout le monde, vous aimez JS ?";

// 1. inversez la chaîne de caractères sentence
// algo
const newSentence = [ ...sentence ]; 
let str = '';
while (newSentence.length > 0 ) {
    str += newSentence.pop();
}

console.log(str);

// Une autre solution moins algorithmique plus rapide car on utilise des fonctions natives (fonctions JS)
str = [ ...sentence ].reverse().join('');
console.log(str);

// 2. la longueur des mots
//  word =>({ }) demande à JS de retourner un littérale dans la fonction fléchée
const words = sentence.split(' ').map( word =>  ( { count : word.length, word  } ) );
console.log(words);

// 3. Counter letter

const letters = new Set(sentence);

const santize = [',', '?', ' '];
const statistic = [];
const sentencesArray = [ ...sentence ];
for(const letter of letters){

    if( santize.includes(letter) ) continue ; // saut une itération il fait un next saute une itération

    const count = sentencesArray.filter( l => l === letter).length;

    statistic.push( { letter, count });
}

// console.log(statistic);

// for(const letter of letters){
//     break; // sort de la boucle
// }

// 3. une autre version utiliser un pattern 
const stat = [];
for(const letter of letters){

    if( santize.includes(letter) ) continue ;
// pattern motif le paramètre g c'est pour capturer l'ensemble des occurences dans la chaîne
    const re = new RegExp(letter, 'g') ; 
    const count = sentence.match( re ).length ;
    // console.log( sentence.match( re ) );
    stat.push({ letter, count});
}

console.log(stat);