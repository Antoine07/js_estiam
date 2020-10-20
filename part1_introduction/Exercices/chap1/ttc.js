
function ttc(price, tva = .2){
    // accepte chaine de caractères numérique "10.5"
    // attention si vous mettez !== JS vérifie le type également
    if( parseFloat(price) != price || parseFloat(tva) != tva){

        return "Erreur type";
    }

    return price * (1 + tva);
}

console.log(ttc(100));
console.log(ttc(100, .19));

console.log(ttc("100", ".19"));

console.log(ttc("hello", .19));

console.log(ttc(100, "hello"));

console.log(ttc("hello", "hello"));




