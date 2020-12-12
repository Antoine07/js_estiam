# Webpack & Babel Introduction

Vous pouvez consulter les documentations officiel des outils suivants :

- npm

- webpack

- babel

## Introduction

**Webpack** permet de packager ou regrouper des modules Javascripts. Il transforme également les assets front-end SASS ou images par exemple, à l'aide de loaders en assets statiques. 

Webpack permet de construire une application moderne. La logique interne de Webpack est basé sur ES5, mais vos scripts ES6 ne seront pas transpilés en ES5.

**Babel** est pour sa part un transpiler (traducteur de code). Nous pouvons l'utiliser avec Webpack pour transpiler notre code ES6 en ES5 par exemple.

## Installation/configuration

Webpack possède un fichier de configuration : **webpack.config.js** que nous allons utiliser dans nos cours/exercices :

- Créez la structure d'un projet simple :

```text
dragons/
    dist/
        index.html
    src/
        core/
        app.js
    webpack.config.js
```

Lancez la configuration d'un projet gérer avec **npm** à la racine de dragon tapez la ligne de commande suivante, elle crée un fichier package.json de configuration pour vos dépendances (modules) dans votre application :

```bash
npm init -y
```

- Puis installez **webpack** & **webpack-cli** en tant que dépendance (flag -D) de votre projet :

```bash
npm install --save-dev webpack webpack-cli 
```

Notez que si vous voulez désinstaller un module en sauvegardant cela dans votre fichier package.json vous taperez la ligne de commande suivante à la racine du projet :

```bash
npm uninstall --save-dev webpack-cli
```

Le fichier package.json a été modifié, ajoutez la clé build : "webpack" dans ce fichier de configuration, ceci nous permettra d'appeler simplement webpack en ligne de commande à l'aide de npm, voyez l'exemple ci-après :

```json
{
  "name": "dragons",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.2.0",
    "webpack-cli": "^4.1.0"
  }
}
```

Dans la console maintenant tapez :

```bash
npm run build
```

### Configuration simple du fichier webpack

Exemple de configuration simple du fichier webpack.config.js, le fichier app.js est le point d'entrée de notre application front-end, nous importerons toutes les dépendances dans ce fichier. Le fichier **bundle.js** est le fichier de build de webpack, c'est ce dernier fichier que l'on importera dans notre application front dans le fichier index.html dans la balise script :

```js

module.exports = {
    entry: './src/app.js', // Point d'entrée
    // Sortie (fichier de build)
    output: {
        filename: "bundle.js"
    }
}
```

Exécutez la commande suivante à la racine de votre projet :

```bash
npm run build
```

Vous devriez avoir un dossier dist dans lequel webpack place son fichier de build.

### Meilleur configuration du fichier Webpack

On utilise le module path afin de demander à webpack d'enregistrer notre fichier de build dans le dossier dist. Ce module possède une méthode resolve, on lui passe deux paramètres : **__dirname** et une chaîne de caractères, ici 'dist' pour qu'il enregistre le fichier de build à la racine du projet dans le dossier dist. Cette configuration est plus rapide et vous permettra de modifier éventuellement le dossier de build.

Voyez le code du fichier index.html ci-après, nous y importons le fichier de build de webpack.

La clé watch demande à Webpack de refaire le build dès qu'un fichier du projet est modifié.

```js
const path = require('path');

module.exports = {
    mode : "development",
    watch : true,
    entry: './src/app.js', // Point d'entrée
    // Sortie
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    }
}
```

Dans votre fichier index.html vous importez votre fichier de build comme suit :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dragons</title>
</head>
<body>
    <script src="bundle.js"></script>
</body>
</html>
```

## Installation & configuration d'un serveur local

Nous allons utiliser le server de développement de webpack. Il nous permettra de watcher/builder les fichiers qui sont modifiés et reloadera automatiquement la page Web. De plus on peut le configurer très simplement à partir du fichier webpack.config.js.

Nous commencerons pas un exemple simple.

### Exemple simple de configuration 

Créez un dossier **webpackExample** : puis initialisez dans ce dossier la configuration suivante :

1. Lancez à la racine du dossier :

```bash
npm init -y
```

2. Créez les dossiers et fichiers suivants :

- index.html mettez du html:5 et insérez une balise div#main dans le body

- src/utils.js

- app.js

- webpack.config.js

```js
module.exports = {
    watch : true,
    entry: 'app.js', // Point d'entrée
    // Sortie
    output: {
        filename: "bundle.js"
    }
}
```

```bash
npm install --save-dev webpack webpack-cli
npm install --save-dev webpack-dev-server
```

Ajoutez maintenant le code suivant dans le fichier package.json, vérifiez que vous avez bien la version v4 au moins de webpack-cli, la syntaxe pour lancer le serveur webpack change.

```json
"scripts": {
    "start": "webpack serve"
  },
```

3. Exportez maintenant une constante **message**, elle contiendra la chaîne de caractères "Hello Webpack", depuis le fichier utils.js dans le fichier app.js.

Affichez ce message dans la page index.html dans un titre de niveau 1, pensez à lancer votre serveur :

```bash
npm run start
```

## Configuration plus technique du fichier webpack

Attention, à la version de votre webpack-cli si v4, pour la compatibilité avec le serveur de développement, vous devez écrire dans le fichier package.json pour lancer le serveur la commande start suivante :

```json
"scripts": {
    "start": "webpack serve"
  },
```

Dans la configuration suivante vous trouverez :

- **watch** : pour lancer l'observation automatique des changements dans vos fichiers du projet. Ici vous n'en avez plus besoin en utilisant le server de webpack.

- mode development : aucun fichier de build ne sera créé (optimisation). Si vous avez besoin d'un build nous vous indiquons la commande ci-après à ajouter dans le fichier package.json

- **output** : nous désignons ici un autre dossier pour créer le fichier de build, nous sommes obligés d'utiliser le module path pour définir un chemin absolu.

- **devServer** : on définit le chemin absolu dans contentBase pour définir le chemin du point d'entrée du serveur, le port et si on doit ouvrir automatiquement le navigateur par défaut lors du lancement du serveur.

```js
// pour créer un chemin absolu pour webpack
const path = require('path'); 

module.exports = {
    // watch: true, // inutile avec le server webpack
    // précise que l'on est en mode développement
    mode : "development",
    entry: './src/app.js', // Point d'entrée
    // Sortie
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    // Configuration de webpack-dev-server minimale
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port : 9000,
        open: true,
        hot : true // reload automatique
    }
}
```

Commande de build à ajouter dans le fichier package.json, on lui précise le fichier de configuration pour tenir compte des options du build. Notez que l'on peut également passer une variable d'environnement NODE_ENV permettant de préciser que nous somme en production. Dans ce cas Webpack optimisera le/les fichier(s) de build, par exemple en mimifiant le fichier JS.

```json
"scripts": {
    "start": "webpack serve",
    "build": "webpack --env NODE_ENV=production --config webpack.config.js"
},
```

Avec l'option de variable d'environement pensez à ré-écrire votre fichier webpack comme suit :

```js

// pour créer un chemin absolu pour webpack
const path = require('path'); 

module.exports = env => {
    
    console.log(env.NOD_ENV)

    return {
        mode : "development",
        entry: './src/app.js', // Point d'entrée
        // Sortie
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "bundle.js"
        },
        // Configuration de webpack-dev-server minimale
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            port : 9000,
            open: true,
            hot : true // reload automatique
        }
    }
}
```

## 01 Exercice Dragons list

Webpack applique le mode strict pour les scripts buildés, dans ce mode vous aurez plus d'erreurs JS remontés pour le. Pour les fonctions par exemple vous devez les définir avant de les appelée.

Récupérez les données de l'exercice ci-dessous :

```js
const dragons = {
    names: [
        { id: 1, name: "Apalala" },
        { id: 2, name: "Balaur" },
        { id: 3, name: "Bolla" }
    ],
    count: 3,
}

export default dragons;

```

1. Affichez la liste de vos dragons dans la page dans une liste **ul/li**. Vous importerez et préparerez les données dans le fichier app.js. Créez une fonction addDragons que vous appelerez comme suit dans le fichier app.js. Cette fonction permettra de charger les données une fois le DOM de la page en question construit :

```js
document.body.onload = addDragons;

```

2. Affichez maintenant leur nombre, en premier dans la page. Modifiez la fonction addDragons.

- Babel

Babel va nous permettre de traduire du code ES6 ou ES2020 en ES5 compatible avec la plupart des navigateurs.

```bash
npm install --save-dev babel-loader @babel/core @babel/preset-env 
```

Dans le fichier webpack.config.js vous devez définir le loader Babel afin qu'il ré-écrive le fichier ES6 (ou JS moderne ...) en ES5 (compatible avec la plupart des navigateurs) par exemple :

```js
const path = require('path'); 

module.exports = {
    // ...
    ,
   module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    }
}
```

- polyfill pour les nouvelles fonctionnalités des nouvelles versions de JS

Si vous utilisez des nouvelles fonctionnalités qui n'existe pas en ES5 ou une autre version supérieur pour votre navigateur, nous utiliserons des polyfill. Ainsi dans votre code vous pourrez utiliser toutes les nouvelles fonctionnalités de JS sans vous souciez de la compatibilité avec la cible votre navigateur.

```js
npm install --save babel-polyfill
```

3. Configurez correctement le projet avec Webpack et Babel

4. Ajoutez les polyfill au projet

Ajoutez également dans votre fichier webpack.config.js, pour la clé **entry** la configuration suivante :

```js
const path = require('path'); 

module.exports = {
    // ...
    entry: ['babel-plyfill', './src/app.js' ], // Point d'entrée
   
   // La suite de votre code ...
}
```

5. Dans le dossier src ajoutez les nouveaux dragons et importez ces dragons dans le fichier app.js

```js
const dragons = {
    names: [
        { id: 1, name: "Apalala", element : 'fire' },
        { id: 2, name: "Balaur", element : 'water' },
        { id: 3, name: "Bolla" }
    ],
    count: 3,
}

export default dragons;
```

6. Affichez la liste des dragons, dans une liste ul/li, en affichant à chaque fois si il existe son élément (fire ou water). Utilisez la nouvelle syntaxe ES2020 suivante pour tester l'existence d'une propriété :

```js

myObject?.attribut

```

- Que c'est-il passé dans le fichier bundle.js ? Builder votre fichier ou inspectez le code avec l'inspecteur du navigateur.

7. Créez le fichier relationships.js suivant. Sous chaque dragon affichez ses relations avec les autres dragons :

```js
const relationships =  [
    { id: 1, relations : [2, 3] },
    { id: 2, relations : [1] },
    { id: 3, relations : [2] }
]
```
8. Un jury a attribué des valeurs sur la force de chaque dragon. En utilisant les données suivantes ajoutez aux données dragons ci-dessus précédentes la moyenne de leur force. Affichez ces résultats sous chaque dragon dans la page Web.

```js
const forces =  [
    { id: 1, notes : [12, 13, 19, 11] },
    { id: 2, notes : [11, 15, 17, 9] },
    { id: 3, notes : [20, 11, 12, 7] }
]
```

9. (**) créez un bouton order pour ordonner l'affichage des dragons par ordre croissant ou décroissant de force.

## Wireframe

```txt
---------------------------------------------

                    Dragons 
[ order C/D ]
---------------------------------------------
    Apalala, element : fire
        force : ...
    Balaur , element : water 
        force : ...
    Bolla 
        force : ...
```
