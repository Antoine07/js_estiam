
// une chaine de caractères est un objet en JS
const phrase = "Mississipi";
let statistic = {};

const letters =  new Set(phrase) ;

console.log(letters);

// parcourir un objet for of
for(const letter of letters){
    let count = 0;
    // On peut parcourir une chaîne de caractères (objet) avec un for of
    for(const p of phrase){
       if( letter == p) count++;
    }

    // console.log(letter, count);
    statistic[letter] = count;
}

console.log(statistic);

// Correction 
// ----------- une expression régulière ou Regex
// On peut-etre utiliser un Regex ... 
// console.log( phrase.match(/i/g).length );

statistic = {};

for(const letter of letters){
    // préparer la chaîne de caractères dynamique dans match
    // le paramètre g facultatif permet de chercher sur toute la chaîne de caractères
    const re = new RegExp(letter, 'g'); 
    console.log(re);
    console.log( phrase.match(re).length ); // On doit essayer de mettre letter (variable) à la place de i 
    statistic[letter] = phrase.match(re).length;
}

console.log(statistic);

// ---- culture générale

statistic = {};

[ ...letters ].map( letter => { 
    const re = new RegExp(letter, 'g'); 
    statistic = { ...statistic, [letter] : phrase.match(re).length }
})

console.log(statistic);