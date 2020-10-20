
// Ici on vérifie le type strictement !== on ne prend que des float 
function sumTTC(p1, p2, p3, tva = .2) {

    // avec !== on vérifiera le type des variables également
    if (
        parseFloat(p1) !== p1
        || parseFloat(p2) !== p2
        || parseFloat(p3) !== p3
        || parseFloat(tva) !== tva
    ) {

        return "Vérifier le type de vos variables";
    }

    return Math.floor((p1 + p2 + p3) * (1 + tva) * 100) / 100;
}

const pricesHT = [1, 2, 3];
console.log(sumTTC(...pricesHT));

console.log(sumTTC(...pricesHT, .3));

const pricesHT2 = ["1", "2", " 3"]; // erreur
console.log(sumTTC(...pricesHT2));

// sanitize nettoyer moins rigoureux sur les types, ça demande un peu plus de travail
// mais on laisse JS faire du transtypage
function sumTTC_v2(p1, p2, p3, tva = .2) {
    // assignation par unpacking
    // préparer les données au bon format avant traitement par la fonction
    [p1, p2, p3, tva] = [parseFloat(p1), parseFloat(p2), parseFloat(p3), parseFloat(tva)];

    // console.log("number", p1, p2, p3)
    // console.log( isNaN(p1), isNaN(p2), isNaN(p3) ) ;

    if (isNaN(p1) || isNaN(p2) || isNaN(p3) || isNaN(tva) ) return "Error type";

    return Math.floor((p1 + p2 + p3) * (1 + tva) * 100) / 100;
}

const pricesHT3 = ["1", "  ", "hello"]; // erreur
console.log(sumTTC_v2(...pricesHT3))

const pricesHT4 = ["1  ", "100.6 ", "89.7"]; // pas d'erreur cast 
console.log(sumTTC_v2(...pricesHT4));