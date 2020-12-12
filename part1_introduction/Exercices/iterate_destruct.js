const students = [
    {
        name: "Alan",
        family: {
            mother: "Isa",
            father: "Philippe",
            sister: "Sylvie",
        },
        age: 35,
    },
    {
        name: "Bernard",
        family: {
            mother: "Particia",
            father: "Cécile",
            sister: "Annie",
        },
        age: 55,
    },
];

// 1. à savoir faire 
for (const { name, family } of students) {
    console.log(`Name : ${name} sister ${family.sister}`);
}

// 2. technique un peu plus avancé 
// on peut également faire de l'assignation avec des sous littéraux (voir le cours)
for (const { name, family: { sister } } of students) {
    console.log(`Name : ${name} sister ${sister}`);
}