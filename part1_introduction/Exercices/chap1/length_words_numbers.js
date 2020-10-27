const students = [ "Alan", "Philippe", "Tony", "Geraldine", "Michelle", "Phi" ];

// 1. Ordre alphabétique

students.sort();

console.log(students);

// 2. 

students.sort((s1, s2) => s1.length - s2.length);

console.log(students);


// 3. 

const numbers = [ 10, 7, 5, 1, 10, 5];

numbers.sort((n1, n2) => n1 - n2);

console.log(numbers);
