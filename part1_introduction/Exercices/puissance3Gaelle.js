const numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.map( number => number **3);

// const powerNumbers = numbers.map(number => {
//     if(number%2 === 0)
//     return number **3;
//     else{
//         return number;
//     }

// });
// const powerNumbers = numbers.map(number => {
//         if(number%2 === 0)
//         return number **3;
        
//         return number;
//     });

const powerNumbers = numbers.map(number => number%2 ? number : number**3);

// const powerNumbers2 = numbers.map(function(number){return number **3;});
console.log(powerNumbers);

// if(nbr%2 == 0){console.log("Nombre pair"); } else {console.log("Nombre impair");}