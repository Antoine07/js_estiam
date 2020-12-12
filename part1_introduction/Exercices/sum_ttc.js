
const priceHT = [100.50, 200.8, 55.7];

// Mettre le/les paramètres facultatifs en dernier dans les paramètres de la fonction
function sumTTC(p1, p2, p3, tva = .2) {

    if (isNaN(parseFloat(p1)) || isNaN(parseFloat(p2)) || isNaN(parseFloat(p3)) || isNaN(parseFloat(tva))) return "Error Type";

    return Math.floor((p1 + p2 + p3) * (1 + tva) * 100) / 100;
}

console.log(sumTTC(...priceHT));
// On change la tva
console.log(sumTTC(...priceHT, .5));

const badPriceHT = [100.50, "hello", 55.7];

console.log(sumTTC(...badPriceHT, .3));

// Approche de diviser pour mieux reigner 

console.log('---------- V2 ----------- ');

function ttc(price, tva = .2) {

    // vérification du type avec parseFloat pour les chiffres avec virgule ou sans virgule
    if (isNaN(parseFloat(price)) || isNaN(parseFloat(tva))) return "Error number price value";

    return Math.floor((price * (1 + tva)) * 100) / 100; // deux chiffres significatifs après la virgule
}

function sumTTC_V2(p1, p2, p3, tva = .2) {

    // pensez à passer la tva dans ce cas si celle-ci change
    return ttc(p1, tva) + ttc(p2, tva) + ttc(p3, tva);
}

console.log(sumTTC_V2(...priceHT, .5));
