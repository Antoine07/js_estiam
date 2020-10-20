const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersOdd = numbers
                    .filter( num => num% 2 === 0) // sélectionne des nombres dans un tableau
                    .map( num => num**3 ); // mapping sur le premier filter

console.log(numbersOdd);

// d'autres exemples de syntaxe

// on filtre les nombres pairs strictement supérieur à 5
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter( num => num % 2 == 0 && num > 5 ) ;