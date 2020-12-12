# Asynchrone JS

## Promesses

Rappel : une promesse est un objet (de type Promise) qui permet de traiter des fonctions asynchrones. Le paramètre d'une promesse est une fonction qui ademte deux paramètres (fonctions de callback) : resolve et reject qui respectivement est appelée si le code asynchrone est un succès ou un échec.

Une fois définie la promesse est consommée, on utilise alors deux méthodes :

- **then** pour récupérer le succès de la Promesse.

- **catch** pour récupérer l'échec de la Promesse.

### Exercice Comsommation d'une promesse

- Ci-dessous on a définit une promesse myPromise, ré-écrivez là en utilisant uniquement des fonctions fléchées.

Notez que même si une Promesse permet de traiter du code asynchrone vous pouvez y mettre du code synchrone comme dans l'exemple ci-dessous :

```js
function myPromise(data, state) {
    
    return (new Promise( function(successCallback, failureCallback){
                if(state) {
                    successCallback(data);
                }else{
                    failureCallback('error');
                }
            })
    );
}

function error(){

    return "Error";
}

// Consommation
myPromise([1,2,3], true)
    .then(
        function (resultat){
            console.log(resultat);
            return resultat;
        }
    )
    .catch( error );
```

## Exercice pile ou face 

Définissez une promesse (fonction fléchée) qui affiche pile ou face (resolve), utilisez la fonction Math.random() de JS pour le lancer de pile/face. Ils se feront avec un décalage de 500ms (setTimeout) fonction asynchrone.

Faites 3 lancers et définssez les paris suivants :

- 3 piles vous gagnez 1 bitcoin

- 1 pile exactement vous gagnez 0.001 bitcoin

- le reste des combinaisons vous perdez 0.5 bitcoin

Indications : vous pouvez utiliser Promise.all pour gérer les lancers.