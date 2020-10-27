const populations = [
    { "id": 0, "name": "Alan" }, // ref1
    { "id": 1, "name": "Albert" }, // ref2 
    { "id": 2, "name": "Jhon" }, // ref3 
    { "id": 3, "name": "Brice" }, // ...
    { "id": 4, "name": "Alexendra" },
    { "id": 5, "name": "Brad" },
    { "id": 6, "name": "Carl" },
    { "id": 7, "name": "Dallas" },
    { "id": 8, "name": "Dennis" },
    { "id": 9, "name": "Edgar" },
    { "id": 10, "name": "Erika" },
    { "id": 11, "name": "Isaac" },
    { "id": 12, "name": "Ian" }
];

// const pop = populations.map( pop =>  { return { ...pop } }  ) ;
// vous devez copier chacune des références dans une nouvel référence
const pop = populations.map( pop =>  ({ ...pop } ) ) ;

pop[0].name = "ALAN";

console.log(populations);
console.log(pop);

