const students = [ "Alan", "Philippe", "Tony", "Geraldine", "Michelle", "Phi" ];

// sort modifie le tableau d'origine
students.sort( (a, b) => a.length - b.length );

console.log( students );