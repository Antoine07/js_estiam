let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function accumulator_v2(numbers, acc = 0) {
    // console.log(acc);

    if(numbers.length === 0) return acc ;

    const number = numbers.shift();
    //console.log(number);
    acc += number;

    return accumulator_v2(numbers, acc);
}

console.log( accumulator_v2(numbers) ) ;

/*
numbers = [1, 2]
accumulator_v2([ 1, 2], acc = 0)
    return accumulator_v2([2], acc = 1)
        return accumulator_v2([], acc = 3)
            return 3

1. return return return 3
2. return return 3
3. return 3
4. 3


console.log('resultat final', accumulator_v2(numbers));

// les fonctions sont successivement appelées 
accumulator_v2([ 1, 2], acc = 0) 
{
    return accumulator_v2([ 2], acc = 1){

        return accumulator_v2([], acc = 3 ){

            return 3
        }
    }
}

*/