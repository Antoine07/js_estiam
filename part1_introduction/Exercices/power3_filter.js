const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersEven = numbers.filter(number => number % 2 === 0).map(number => number ** 3);

console.log(numbersEven);