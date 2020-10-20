
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersOddPower = numbers.map( number => number % 2 === 0 ? number**3 : number );

console.log(numbersOddPower);

// deuxième version

const numbersOddPower_v2 = numbers.map( number => {

    if( number % 2 === 0) return number**3;

    return number;
} );

console.log(numbersOddPower_v2);
