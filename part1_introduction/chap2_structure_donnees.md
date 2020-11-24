# Introduction aux structures de données

## Les tableaux

Vous pouvez définir un tableau, qui n'est rien d'autre qu'un objet JS, simplement à l'aide de crochets :

```js
let fruits =  ['Apple', 'Orange'];
```

### Exercice reference array

1. Reprenez la variable fruits ci-dessus. Que vaut le console.log dans l'exemple suivant? Affichez le contenu des deux tableaux :

```js
let fruits =  ['Apple', 'Orange'];

let newFruits = fruits;

newFruits.push('Banana')

console.log(newFruits.length === fruits.length)
```

2. Ecrivez un script pour créez un nouveau tableau newFruit qui n'a pas la même référence que fruits.


## Exercice copie de population

Ecrivez un script qui permet de copier dans une nouvelle référence le tableau de données suivant :

```js

const populations = [
    { "id": 0, "name": "Alan" },
    { "id": 1, "name": "Albert" },
    { "id": 2, "name": "Jhon" },
    { "id": 3, "name": "Brice" },
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

```

## Copie d'un tableau

Si vous assignez un tableau t1 dans une variable t2 alors JS ne crée pas un nouveau tableau. t2 a la même référence mémoire que t1. Modifier un des deux tableaux t1 ou t2 modifiera alors l'autre. 

## Fonction map

La méthode map permet de parcourir un tableau et d'exécuter une fonction pour chaque élément du tableau. Dans l'exemple ci-dessous, i est un compteur et curr est la valeur courante du tableau arr :

```js
arr.map((curr, i) => console.log(i, curr));
```

La méthode map retourne un nouveau tableau avec les résultats de l'appel d'une fonction sur chaque élément du tableau :

```js
const sheeps = ['🐑', '🐑', '🐑'];

const newSheeps = sheeps.map( sheep => sheep + sheep );
 // ["🐑🐑", "🐑🐑", "🐑🐑"]
```

### Exercice copie de fruits

Proposez une solution pour copier le tableau fruits en utilisant map.

### Exercice square numbers

Ecrire un script, qui utilise map, qui permet d'élever au carré les nombres de la liste suivante :

```js
let numbers = [1, 8, 3, 7];
```

### Exercice mult number 

Ecrire une fonction qui multiple par 3 les nombres pairs et par 5 les nombres impairs de la liste des nombres suivants :

```js

let numbers = [7, 9, 10, 1, 2, 3, 71, 8 ];
```

### Exercice string

1. Inversez la chaîne de caractères sentence ci-après.

2. Comptez la longueur de chaque mot.

3. Faites un script qui prend en argument message (texte) et qui retourne un tableau des valeurs du nombre de caractères de chaque mot. Vous ne compterez pas les esapces comme un caractère.

Indication : utilisez la méthode split pour transformer la chaîne en tableau.

```js
const sentence = "Bonjour tout le monde, vous aimez JS ?";
```

## Méthode spread pour copier un tableau

Vous pouvez utiliser la méthode spread pour faire une copie peu profonde d'un objet :

```js
    let numbers = [7, 9, 10, 1, 2, 3, 71, 8 ];

    let cloneNumbers = [ ...numbers ];

```

Le spread operator ne marchera pas sur des objets plus complexes (imbriqués).


## Map

Un objet Map est une collection de paires clé/valeur qui peut utiliser n'importe quel type de données comme clé.

```js
const jedi = new Map()

```

### Ajoutez des valeurs dans un Map 

```js
jedi.set('firstName', 'Luke')
jedi.set('lastName', 'Skywalker')
jedi.set('job', 'Jedi Master')
```

Vous pouvez également ajouter des valeurs dans un map à l'aide d'un tableau de tableaux:

```js
const jedi = new Map([
  ['firstName', 'Luke'],
  ['lastName', 'Skywalker'],
  ['job', 'Jedi Master'],
])
```

Quelques fonctions utiles sur les maps :

```js

// rechercher une clé 
jedi.has('shark') // false

// accéder à une valeur à partir de sa clé
jedi.get('firstName')

// taille du map
jedi.size

// supprimer un élément
jedi.delete('firstName');

// tout supprimer
jedi.clear()

// les keys et values
jedi.keys()
jedi.values()
// les deux 
jedi.entries()
```

### Itération sur un Map

- à l'aide d'un for of

```js
for (const [key, value] of jedi) {
  console.log(`${key}: ${value}`)
}
```

- à l'aide d'un foreEach 

```js
jedi.forEach(( v, k ) =>  console.log(v, k));
```

### Exercice average Map 

1. En utilisant les données DataStudents ci-dessous, créez un Map puis calculer la moyenne de chaque étudiant. Vous utiliserez la clé average du tableau DataStudents et la moyenne sera donnée à 2 décimales prêts après la virgule.

Mettez à jour la mention en fonction de la moyenne obtenue, voir la clé mention dans les données ci-dessous. Pour les différentes moyennes vous utiliserez le code de mentions suivant :

- TB pour 17 à 20
- B pour 14 à 16
- AB pour 12 à 13
- P pour 10 à 11
- Pour les autres cas mettre aucune mention.

2. Créez un script qui permet d'ajouter un étudiant avec une clé sX ou X est un nombre, vérifiez avant l'ajout que la clé n'existe pas.

```js

const DataStudents =
    [
        [
            "s1",
            {
                "name": "Alice",
                "mention": "",
                "notes": [11, 12, 18],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/1"
            }
        ],
        [
            "s2",
            {
                "name": "Alan",
                "mention": "",
                "notes": [10, 14.5, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s3",
            {
                "name": "Bernard",
                "mention": "",
                "notes": [11, 9, 9],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
        "s4",
        {
            "name": "Naoudi",
            "mention": "",
            "notes": [14.5, 19, 18],
            "average" : null,
            "url": "http://lorempixel.com/100/100/cats/3"
        }
        ],
        [
            "s5",
            {
                "name": "Fenley",
                "mention": "",
                "notes": [9, 7, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ],
         [
            "s6",
            {
                "name": "Shere Khan",
                "mention": "",
                "notes": [],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ]
    ];

// création du Map
const dataStMap = new Map(DataStudents);
```

## Set

L'objet Set, qui se traduit par ensemble en français, permet de stocker des valeurs uniques de n'importe quel type : primitif ou objet.

Voici en résumé les différentes méthodes d'un Set.

```js
const ensemble = new Set();

ensemble.add(1);         
ensemble.add(5);         
ensemble.add("100");

ensemble.has(1); // true
ensemble.has(3); // false
ensemble.size; // 3

ensemble.delete(5); // retire 5 du set
ensemble.has(5);    // false, 5 a été retiré de l'ensemble

ensemble.size; // 2, on a retiré une valeur de l'ensemble
console.log(ensemble); // Set [ 1, "du texte" ]
```

## Exercice count letters

Comptez chacune des lettres dans "Mississipi". Affichez le résultat dans une structure de données lisible.

Généralisez et créez maintenant une fonction qui prend en paramètre une chaîne de caractères et qui retourne le nombre d'occurences de chacune de ses lettres.

## Exercice count digit

Soit la chaîne de caractères suivantes, récupérez tous les numériques de cette chaîne dans un tableau :

```js
const phrase = '8790:bonjour le monde:8987:7777:Hello World:9007';
```

## Exercice Population intérêts et analyse de données

En utilisant les données ci-dessous 

1. Comptez tous les docteurs.

2. Récupérez les noms des développeurs fullstack.

3. Récupérez les noms des personnes qui n'ont jamais travaillés.

4. Etudiez les mots de passe des personnes et comptez les occurences des chacune des lettres distinctes dans les mots de passe.

5. (Facultatif) Sélectionnez les personnes qui ont des mots de passe avec un nombre de lettre très différents, chaque mot de passe fait exactement 9 caractères. Puis, repérez les/le mot(s) de passe qui contiennent/contient un double 00. Y-a-t-il des mots de passe identique ? Si oui précisez le nom des personnes possédant ces mots de passe.

```js
const populations = [
  { id: 0, name: "Alan", jobs = ['dev junior', 'dev fullstack'], password : "tyeedsa00" },
  { id: 1, name: "Albert", jobs = [ 'doctor'], password : "tyeidii00" },
  { id: 2, name: "Jhon" , jobs = ['mathematician', 'doctor'], password : "xyuuuoi00"},
  { id: 3, name: "Brice", jobs = ['dev fullstack'] , password : "xytoiab00"},
  { id: 4, name: "Alexendra", jobs = ['dentist'],  password : "aaaoiab00" },
  { id: 5, name: "Brad" },
  { id: 6, name: "Carl" , jobs = ['lead dev', 'dev fullstack']},
  { id: 7, name: "Dallas" , jobs = [ 'dev fullstack']},
  { id: 8, name: "Dennis", jobs = ['integrator', 'dev fullstack'] },
  { id: 9, name: "Edgar", jobs = ['mathematician'] },
  { id: 10, name: "Erika", jobs = ['computer scientist', 'mathematician'] },
  { id: 11, name: "Isaac", jobs = ['doctor'], password : "Axgkj00Kl" },
  { id: 12, name: "Ian", password : "Axgkj00Kl" },
];

```