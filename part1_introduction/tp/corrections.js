const populations = [
    { id: 0, name: "Alan", jobs: ['dev junior', 'dev fullstack'], password: "tyeedsa00" },
    { id: 1, name: "Albert", jobs: ['doctor'], password: "tyeidii00" },
    { id: 2, name: "Jhon", jobs: ['mathematician', 'doctor'], password: "xyuuuoi00" },
    { id: 3, name: "Brice", jobs: ['dev fullstack'], password: "xytoiab00" },
    { id: 4, name: "Alexendra", jobs: ['dentist'], password: "aaaoiab33" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl", jobs: ['lead dev', 'dev fullstack'] },
    { id: 7, name: "Dallas", jobs: ['dev fullstack'] },
    { id: 8, name: "Dennis", jobs: ['integrator', 'dev fullstack'] },
    { id: 9, name: "Edgar", jobs: ['mathematician'] },
    { id: 10, name: "Erika", jobs: ['computer scientist', 'mathematician'] },
    { id: 11, name: "Isaac", jobs: ['doctor'], password: "Axgkj22Kl" },
    { id: 12, name: "Ian", password: "Axgkj00Kl" },
];

// 1. Comptez tous les docteurs.

// jobs 
const jobs = populations.map(person => person.jobs);
console.log(jobs);

// filtrer les docteurs tout de suite
//   const jobs_v2 = populations.filter( person =>  )

// méthode includes sur un tableau 
console.log(['dev junior', 'dev fullstack'].includes('dev junior'));

const jobs_v2 = jobs
    .filter(j => j != undefined)
    .filter(j => j.includes('doctor'));
console.log(jobs_v2.length); // nombre de doc 

// Une autre correction possible
// attention ceci ne marche pas on ne peut pas faire includes sur undefined ...
// .filter( person => (person.jobs.includes('doctor') && person.jobs != undefined  ));
const jobs_v3 = populations
    // si le premier test est faux JS n'évalue le deuxième test
    // le ET logique de JS est passif à retenir car très utile
    .filter(person => (person.jobs != undefined && person.jobs.includes('doctor')));


console.log(jobs_v3.length);

// 2. Récupérez les noms des développeurs fullstack.

const devFullStack = [];
populations.map(person => {
    if (person.jobs != undefined && person.jobs.includes('dev fullstack')) {
        devFullStack.push(person.name);
    }
});

// console.log(devFullStack);

// 3. Récupérez les noms des personnes qui n'ont jamais travaillés.
const noJobs = [];
populations.map(person => {
    if (person.jobs == undefined) {
        noJobs.push(person.name);
    }
});

// console.log(noJobs);

// 4. Etudiez les mots de passe de chaque personne, comptez leurs occurences pour chaque lettre distincte.

// 4.1 récupérer les mots de passe (si il existe ) avec le nom de la personne

const persWithPassword = populations
    .filter(person => person.password != undefined)
    .map(person => ({ name: person.name, password: person.password }))
// .map(person => {
//     return { name: person.name, password: person.password }
// })
console.log(persWithPassword);

// 4.2 Comptez leurs occurences pour chaque lettre distincte.

const countOccurence = (phrase) => {
    const letters = new Set(phrase);
    const statistic = [];
    const sentencesArray = [ ...phrase ];

    for (const letter of letters) {
        const count = sentencesArray.filter(l => l === letter).length;

        statistic.push({ letter, count });
    }

    return statistic;
}

for(const person of persWithPassword){

    // console.log( countOccurence(person.password) );

    person.occurences = countOccurence(person.password) ;
}

console.log(persWithPassword);

