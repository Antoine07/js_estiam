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
];

// 1. ordonner en fonction de la longueur des names

// la fonction compare dans le sort indique dans quel sens tu fais le tri croissant ou décroissant
populations.sort((p1, p2) => p1.name.length - p2.name.length);

// 2. Ajout d'une nouvelle clé lenName

populations.map(pop => pop.lenName = pop.name.length);

// 3.

const sizes = [];
const groupNames = [];

for (const { lenName } of populations) {

    if (sizes.includes(lenName) == false) {
        sizes.push(lenName);
        groupNames.push(populations.filter( pop => pop.lenName == lenName ) );
    }
}

console.log(groupNames);

// v2 avec un Set 
// création de l'ensemble des longueurs distinctes des noms (le Set retire les doublons)
const ensembleSizez = new Set(populations.map(pop => pop.lenName));
const groupNames_bis = [];

for (const lenName of ensembleSizez) {
    groupNames_bis.push(populations.filter( pop => pop.lenName == lenName ));
}

console.log(groupNames_bis);


// tri à bulle en supplément

// on cherche le plus et on le place au bout du tableau

const triBulle = (numbers, compare = -1) => {
    for (let i = numbers.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {

            if (compare < 0) {
                if (numbers[j] - numbers[j + 1] > 0) {
                    [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
                }
            } else {
                if (numbers[j + 1] - numbers[j] > 0) {
                    [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
                }
            }
        }
    }

    return numbers;
}

const numbers = [10, 7, 5, 1, 8, 50];
triBulle(numbers, 1);
console.log(numbers);

triBulle(numbers, -1);
console.log(numbers);