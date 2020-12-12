

function ttc(price, tva = .2) {

    // vérification du type avec parseFloat pour les chiffres avec virgule ou sans virgule
    if ( isNaN(parseFloat(price)) || isNaN(parseFloat(tva)) ) return "Error number price value";

    return Math.floor( ( price * (1 + tva) ) * 100 ) / 100 ; // deux chiffres significatifs après la virgule
}

console.log(ttc(100));
console.log(ttc(100, .3));
console.log(ttc("hello", .3));
// JS est capable de transtyper une variable 

console.log(ttc("100.9", .3));
// vérifier le type 
console.log( isNaN(parseFloat(100)) === true  );
console.log( isNaN(parseFloat("Hello")) === true  );


console.log(ttc("100", ".3"));
console.log(ttc(ttc(100.50, 0.2)));