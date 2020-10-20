const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersEvenSum = numbers
                        .filter (num => num % 2 == 1 )
                        .reduce((acc, curr) => acc + curr);

console.log(numbersEvenSum);