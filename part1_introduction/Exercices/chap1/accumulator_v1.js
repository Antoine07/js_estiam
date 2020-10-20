let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function accumulator_v1(numbers, type = '+') {

    if( type != '+' && type != '*') return "Error";

    let sum;
    if (type == '+') {
        sum = 0;
        for (const num of numbers) {
            sum += num;
        }
    }

    if (type == '*') {
        sum = 1;
        for (const num of numbers) {
            sum *= num;
        }
    }

    return sum;
}

// test pour l'addition
console.log(accumulator_v1(numbers));
console.log(accumulator_v1(numbers, '+'));
console.log(accumulator_v1(numbers, '*'));

// erreur au niveau de l'opérateur type
console.log(accumulator_v1(numbers, '-'));

