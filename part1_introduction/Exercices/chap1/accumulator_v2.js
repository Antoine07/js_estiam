let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function accumulator_v2(numbers, acc = 0) {

    if(numbers.length === 0) return ;

    const number = numbers.shift();

    console.log(number);

    accumulator_v2(numbers);
}

accumulator_v2(numbers);