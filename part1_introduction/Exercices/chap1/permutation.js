// permutation facile en ES6 et plus ...

let a = 2;
let b = 3;

// assignation par décomposition 
[a, b] = [b, a]

// veille technique avec la variable tmp
let tmp;
tmp = a ;

a = b;
b = tmp;

// technique maths
a = a + b ;
b = a - b ; // il y a la valeur a maintenant dans b
a  = a - b // reste plus qu'à la retirer à a 
