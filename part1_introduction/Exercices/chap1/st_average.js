const student = {
    name: "Alan",
    notes: [10, 16, 17],
    average: null,
};

const lenNotes = student.notes.length;

if (lenNotes > 0) {
    // reduce permet d'accumuler des valeurs en appliquant un calcul dessus
    const sum = student.notes.reduce((acc, curr) => acc + curr);
    const avg = Math.round((sum / lenNotes) * 10) / 10;

    student.average = avg ;
}

console.log(student);