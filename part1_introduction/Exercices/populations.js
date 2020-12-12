const populations = [
    { id: 0, name: "Alan" },
    { id: 1, name: "Albert" },
    { id: 2, name: "Jhon" },
    { id: 3, name: "Brice" },
    { id: 4, name: "Alexendra" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" },
    { id: 7, name: "Dallas" },
    { id: 8, name: "Dennis" },
    { id: 9, name: "Edgar" },
    { id: 10, name: "Erika" },
    { id: 11, name: "Isaac" },
    { id: 12, name: "Ian" },
    // { id: 13, name: null },
];
// 1.
populations.sort((p1, p2) => p1.name.length - p2.name.length);

// 2. 
for (const population of populations) {
    population.lenName = population.name.length;
}

console.log(populations);

// un tableau des longueurs distincts des noms
console.log(new Set([3, 4, 4, 5, 5, 5, 9]));

console.log(populations.map(pop => pop.name));

// 3. 

// Indications créez un tableau qui récupère chaque longueur de nom une seule fois.
const groupNames = [];
const lenNames = new Set(populations.map(pop => pop.lenName));

console.log(lenNames);

for (const len of lenNames)
    groupNames.push(populations.filter(pop => pop.lenName === len));

console.log(groupNames);

console.log('----------- V2 groupNames ')

// sans le Set
const groupNames2 = [];
let testLen = []; // on regroupe toutes les longueurs déjà testé
for (const pop of populations) {
    const len = pop.lenName;

    if (testLen.includes(len) === false)
        groupNames2.push(populations.filter(pop => pop.lenName == len));

    testLen.push(len);
}

console.log(groupNames2);

console.log(' ------------------- ')


// 4.

const relations = [
    { id: 0, relation: [1, 2, 4] },
    { id: 3, relation: [7, 8] },
    { id: 4, relation: [2, 7, 8, 11] },
    { id: 5, relation: [1, 2, 4] },
    { id: 7, relation: [2, 3, 5, 9] },
    { id: 9, relation: [1, 2, 4, 8, 11] },
    { id: 11, relation: [1, 2, 9, 10,] },
];

for (const { id, relation } of relations) {
    const personne = populations.find(pop => pop.id === id);

    if (personne) {
        personne.relation = populations.filter(pop => relation.includes(pop.id)).map(pop => pop.name);
    }
}
