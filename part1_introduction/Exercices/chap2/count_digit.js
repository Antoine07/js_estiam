
const phrase = '8790:bonjour le monde:8987:7777:Hello World:9007';

// Number filtre les nombres c'est une fonction elle renvoie soit le nombre "8790" -> 8790 
// soit NaN si c'est une chaîne de caractères (lettres uniquement) par exemple Number("bonjour le monde") -> NaN 
// pour le filter NaN c'est false et un nombre est considéré comme true
const statistic =  phrase.split(':').filter(Number) ;