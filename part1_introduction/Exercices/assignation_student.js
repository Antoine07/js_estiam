const student = {
    name: "Alan",
    notes: [10, 16, 17],
    average: null,
};

const DECIMAL = 100; // chiffre significatif éviter le hard coding (mettre des valeurs en dur dans les scripts ...)

// une fonction fléchée qui calcul la moyenne
const averageNotes = notes => {
    if (notes.length === 0) return "Exception no notes";

    // acc vaut 0 par défaut 
    const avg = notes.reduce((acc, curr) => curr + acc) / notes.length;

    return Math.floor(avg * DECIMAL) / DECIMAL;
}
// 1. 
student.average = averageNotes(student.notes);

// 2. plus simple d'utiliser des variables dans le script en plus des constantes !
const { name, notes, average } = student;
console.log("Name :" + name + " nombre de notes " + notes.length + " Average :" + average);
console.log(`Name : ${name} Nombre de notes : ${notes.length} Average ${average}`);

// Deuxième version de la fonction moyenne
const averageNotes_v2 = ({ notes }) => {
    if (notes.length === 0) return "Exception no notes";

    // acc vaut 0 par défaut 
    const avg = notes.reduce((acc, curr) => curr + acc) / notes.length;

    return Math.floor(avg * DECIMAL) / DECIMAL;
}

console.log(averageNotes_v2(student));