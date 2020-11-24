# Asynchrone en JS

## Introduction

Exécution du code de manière différée. Il permet également de gérer des actions qui "normalement" sont bloquantes. Chaque ligne est exécutée de manière synchrone, si une fonction prend du temps à s'exécuter le code synchrone attend la fin de son exécution.

**JavaScript est synchrone et mono-thread**. Il n'y a qu'un seul fil d'exécution, stack, du code source, chaque ligne est exécuté de manière synchrone... Par contre les lignes asynchrones sont placées dans une file d'exécution (Task Queue). Toutes les fonctions asynchrones seront alors exécutées les unes à la suite des autres (par l'Event Loop), elles seront alors envoyées dans la stack d'exécution sans bloquer le reste de l'exécution (stack d'exécution synchrone). 

Ce mécanisme dans JS est géré par : l'Event Loop qui remet les fonctions de callback dans la stack d'exécution. Ce mécanisme constitue le coeur de JS.

Attention, ne condondez pas, il n'y a pas de parallèlisme dans l'exécution du code JS. Tout est géré dans un seul et unique thread d'exécution.

![task queue](images/async.png)

\newpage

Par exemple, lorsque vous faites un appel réseau (API), vous pouvez fournir à une fonction asynchrone une fonction de callback qui sera exécutée dans la stack d'éxecution qu'une fois la réponse de l'API effectuée, sans bloquer le reste du code.

Remarques : il peut y avoir plusieurs Task Queue, par exemple le navigateur peut **prioriser** certaines actions asynchrones. Par défaut dans une Task Queue les callbacks sont en mode FIFO (first in first out ou premier entrée premier exécuté).


## Exemple de code synchrone

```js

cons synchroneFunc = () => {
    console.log("Start function");
}

console.log("Start");
synchroneFunc();
console.log("End");


```

## Exemples de code asynchrone ...

```js
console.log('Start');

setTimeout(() => console.log('Hello world !'), 1000);

console.log('End');
```

## Exercice login callback

Soit le programme asynchrone login suivant. Que vaut à votre avis la variable email dans le script ?

```js

const login = (email, password ) => {
    setTimeout(() => {
        return { email };
    }, 1000);
}

const email = login('alan@alan.fr', 1234567890);
console.log(email);

```

Ajoutez une fonction de callback afin de récupérer la valeur de l'email une fois l'utilisateur connecté (...)

```js
const login = (email, password, callback ) => {
    setTimeout(() => {
        // ...
    }, 1000);
}
```

## Exercice additions callback

1. En utilisant deux fois la fonction add qui est asynchrone et avec sa fonction de callback additionner 1 et 2 

```js
const add = (number, callback) => {
    setTimeout(() => {
        //
    }, 1000);
}
```

Ajoutez maintenant une fonction de callback **error** cette fonction sera appelée uniquement si on passe à la fonction add une valeur qui n'est pas un nombre. Vous testerez la fonction d'erreur.

2. Améliorez la fonction d'erreur en levant une exception.

```js

throw new Error('Bad number ...')

```

### Exercice concat async

Soit une fonction message asynchrone qui retournera une chaîne de caractères. Appellez deux fois cette fonction pour concatener le message suivant : "Hello" + "World!".

## Promesse

La gestion de l'asynchrone peut devenir très vite complexe si on utilise systématiquement des fonctions de callback (callback hell), comme on vient de le voir. Nous allons maintenant aborder une autre approche native au JS : les Promesses. Elles simplifient l'utilisation de méthodes asynchrones.

Une promesse a un **état initial** en attente : **pending**. Une fois **résolue** elle est dans **l'état settled**, dans ce cas son état ne change plus.

- La méthode **then** est une méthode qui sera appelée après le succès de la promesse en cas d'échec la méthode **catch** sera appelée.

### Exemple de promesse

```js
const p = number => ( new Promise((resolve, reject) => {
    setTimeout(() => {
        if(number > 100) {
            reject(new Error('To big'));
            return;
        }
        resolve(number);
    }, 300);
    })
);

p(9)
.then( num => console.log(num))
.catch( err => console.error(err))

```

Remarques : vous pouvez enchaîner plusieurs promesses, elles seront résolues l'une à la suite de l'autre.

## Exercice add avec des promesses

Reprennez l'exercice précédent avec la fonction **add** mais, cette fois-ci utilisez des promesses.

## Promise all

Vous pouvez également lancer plusieurs promesses en même temps et attendre que toutes ces promesses soient résolues ou si l'une d'entre elle échoue tout arrêter. Promise.all permet d'exécuter un ensemble de promesses :

```js
const p = number => ( new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isNaN(parseInt(number))) {
        reject( new Error( 'not a number ...' ) );

        return;
    }
    resolve(number);
  }
  , 100);
}) ) ;

Promise.all([p(1), p(2), p(3)]).then(numbers => { 
    console.log( numbers.reduce((acc, curr) => acc + curr) );
}).catch( err => console.error(err));

```

### Exercice read json dragon

Vous allez utiliser un module node "fs" qui permet de lire un fichier, voici une syntaxe de base pour lire un fichier, récupérez le fichier data/dragons.json sur le serveur et testez le code ci-dessous :

```js
const fs = require('fs');

fs.readFile('./data/dragons.json', { encoding: 'utf8' }, (err, data) => {
    // impossible de lire le fichier
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    // success
    // JSON.parse permet de transformer un fichier JSON en un objet JSON JS
    console.log('File data:', JSON.parse(data)) 
})
```

1. Changez le code ci-dessus et utilisez une **promesse** pour gérer la récupération des données au format JSON Object dans JS.

2. Quel est le nom du dragon le plus agé ? Faite un script pour répondre à cette question.

3. Quel est le nom du dragon le plus jeune ? Faite un script pour répondre à cette question.

4. Récupérez les dragons et ordonnées les par age décroissant.

### Exercice relationships dragons

Vous avez un deuxième fichier relationship.json qui contient contient les relations des dragons entre eux.

En utilisant exclusivement les promesses, créez un tableau ou Map dans lequel vous placerez le nom des amis directs de chaque dragon.

### Exercice fibonacci async

Ecrivez un script qui retourne toutes les 500ms les nombres successifs de la suite de Fibonacci.

Essayez maintenant d'encapsuler votre code dans une Promesse, que constatez-vous ?

### Exercice algorithmique (**)

Soit la matrice de valeurs munériques dans le fichier data/matrix.json. Certaines valeur(s) sur certaine(s) ligne(s) de cette matrice sont manquantes (notées None). Récupérez ces données et complétez les données manquantes en remplaçant celles-ci par la moyenne des valeurs de la ligne.

## Async await

L'opérateur **await** permet d'attendre la résolution d'une promesse, elle ne peut être utiliser qu'à l'intérieur d'une fonction **async**. L'intérêt c'est d'avoir une **logique "synchrone"** sur une partie de code asynchrone.

```js
async function process(){
    try{
        let sum = 0;
        const res1 = await add(1); // attendre la résolution de la promesse
        sum+=res1;
        const res2 = await add(3);
        sum+=res2;
        const res3 = await add(5);
        sum+=res3;

        console.log(sum);
    // si vous lancez une exception à partir de la promesse
    // dans le cas où celle-ci est échoue
    // vous capturez l'exception dans le bloc suivant 
    }catch( err ){
        console.error(err);
    }
}
```

Une fonction async/await peut également retourner une valeur, dans ce cas vous traiterez son retour comme une promesse

```js
async function process() {
    let sum = 0;
    const res1 = await add(1); 
    sum+= res1;
    const res2 = await add(2); 
    sum+= res2;

    return sum;
}

process()
    .then( sum => console.log(sum))
    .catch(err => console.error(err));
```

### Exercice anim

Soit la Promesse anim, elle retournera une valeur aléatoire composée d'un chiffre de 1 à 9 et d'une lettre comprise entre A à X. 
Executez 10 fois ce "générateur" pour construire une chaîne aléatoire en utilisant la technique async/await décrite ci-dessus.

### Exercice fibonacci async

Reprendre l'exercice précédent et utilisez l'async/await pour calculer la nème valeur de la suite de Fibonacci.

### Exercice fetch 

Nous allons utilisez fetch dans un fichier JS en installant un module Node :

```bash
npm install node-fetch
```

Utilisez fetch pour récupérer les users à l'adresse suivante, puis récupérez : les noms et coordonnées GPS si il existe de chaque user dans un Map. Affichez les résultats dans un console.log, puis enregistrez les données dans un fichier en utilisant fs que nous avons déjà utiliser.

```js

fetch( 'https://jsonplaceholder.typicode.com/users' )
    .then( res => res.json())
    .then( res => console.log(res))
```