const strNumbers = [];
const str1 = ["one", "two"];
const str2 = ["three", "four"];

// ce n'est pas la solution car concat renvoie un nouveau tableau
// console.log(strNumbers.concat(str1).concat(str2));

// strNumbers.push( ...str1);
// strNumbers.push( ...str2);

strNumbers.push(...str1, ...str2 );

console.log(strNumbers);
