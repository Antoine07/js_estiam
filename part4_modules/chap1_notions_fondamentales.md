# Import & export en JS Introduction

## Définition module

c'est du code métier que l'on écrit dans un fichier et qui pourra reservir dans d'autres programmes. Comme notre parser JS. Vous avez aussi des modules de la communauté des devéloppeurs qui sont publiés.

Nous allons vous montrer dans deux contextes différents comment faire des import/export en ES6.

Vous avez deux exemples dans le dossier Examples de ce chaptire :

- Examples/InNodeJS

- Examples/HTML

1. Examples/InNodeJS

Structure des dossiers et fichiers :

```text
InNodeJS/
    core/
        parse.js
    app.js
    config.js
    package.json
```

Dans le contexte "NodeJS", c'est-à-dire lorsqu'on exécute nos fichiers en ligne de commande comme vu dans le cours, et pour les versions de NodeJS 14 et 12, nous devons créer un fichier **package.json** dans lequel on précise à NodeJS que l'on utilise la syntaxe ES6 pour les import et export (sinon ça ne marchera pas ...).

- Fichier package.json, regardez dans le dossier

```json
{ "type": "module" }
```

Testez le code pour voir si tout marche correctement, dans le dossier InNodeJS :

```bash
node app.js

// dans la console
API : ABC123
PASS : 123
Phrase parsing  891819 891819
```

## export par défaut

Vous ne pouvez faire qu'un export, de constante, fonction ou classe par défaut par fichier.

Dans le fichier core/parse.js nous exportons la fonction parse que nous utilisons dans le fichier app.js.

L'export default vous permet lors de l'import de le renommer.

```js
// Dans le fichier parse.js
export default const parse = () => console.log("parsing...");

// Dans le fichier app.js vous pouvez renommer cette constante
import superParser from './core/parse.js';
``` 

## export multiples

Vous pouvez faire autant d'export de constante, fonction, classe que vous souhaitez :

```js
export const API = "ABC123";
export const PASS = "123";

export const sayHello = message => `Voici mon message ${messaqge}`;
```

Vous pouvez également exporter des constantes, classes, fonctions en utilisant la syntaxe suivante :

```js
const API = "ABC123";
const PASS = "123";

const sayHello = message => `Voici mon message ${messaqge}`;

export { API, PASS, sayHello };
```

## import 

Les exemples d'import sont fait dans le fichier app.js.

Pour importer une constante, fonction ou classe qui a été exporté par défaut, vous pouvez dans ce cas renommer cet import, ci-dessous on a renommé la fonction parse exportée par défaut depuis le fichier core/parse.js :

```js
import parseDigit from './core/parse.js';

// appel de la fonction exportée
parseDigit('ma phrase9909: hhh:  9897');
```

Si on importe des constantes, classes ou fonctions (export multiple) alors on utilisera la synstaxe suivante pour les importer :

```js
import { API, PASS } from './config';

console.log(API, PASS);
```

Notez que vous pouvez utiliser des alias pour renommer vos import :

```js
import { API as myAPI , PASS as myPass } from './config';

console.log(myAPI, myPass);
```

## Import multiple

Vous pouvez également importer l'ensemble des éléments exportés à l'aide de la syntaxe suivante :

```js

import * as myCore from './core/utiles.js';

```

Pour le choix de l'alias vous êtes libre de choisir le nom que vous souhaitez. JS importera dans ce cas un objet de type module. Pour accéder aux éléments du module vous utiliserez la syntaxe classe suivante :

```js
myCore.API;
myCore.parser("hello:");
// ...
```

## Dans le contexte du navigateur Web (import/export)

### Introduction

Vous pouvez importer des scripts depuis un fichier externe avec la balise script dans la page HTML. Cette technique marche très bien, mais si vous avez de nombreux scripts à importer dans un projet donné, vous devez dans ce cas faire autant d'import avec cette balise que vous avez de scripts. Et dans ce cas vous ferez autant d'appel serveur que vous importez de scripts... De plus vous devez faire attention à l'ordre dans lequel vous devez faire l'import pour gérer les dépendances...
De plus dans ce cas tous vos scripts partagent le même scope (...) C'est un problème car vous pouvez dans ce cas avoir des problèmes de re-définitions ou collisions de variables/fonctions.

Nous allons voir comment on va créer un fichier "point d'entrée" qui importera l'ensemble de nos dépendances et que nous importerons dans notre page HTML.

Récupérez l'exemple dans le dossier HTML dans le dossier Examples.

Vous devez également installer un module pour vscode, il nous permettra de lancer un live server :

![livereload](images/liveServer.png)

Allez dans la partie installation de module et installez le module Live Server de Ritwick Dey.

Une fois installé, vous devrier voir, placez dans la barre d'état en bas à droite de vscode, un bouton "Go Live". Cliquez dessus, le live serveur lancera votre navigateur par défaut, et naviguez dans vos dossiers pour afficher la page index.html.

*Remarque : le live server se lance à la racine de votre projet vscode.*

Dans cette page nous n'avons qu'à charger le fichier app.js en mentionnant à notre navigateur que le fichier importé utilise des modules, voyez l'attribut type="module" dans la balise script ci-dessous, ce code se trouve dans la page index.html : 

```html
 <script type="module" src="./app.js"></script>
 ```
 Le code devrait fonctionner correctement. Pour le vérifier inspectez (console) la page Web, vous devriez voir :

```text
API : ABC123  app.js:12 
PASS : 123    app.js:15 
```

Remarque : ne cherchez pas à afficher la page index.html directement depuis vos dossiers et fichiers de votre OS, passez par le Live Server de vscode, le navigateur bloquera les imports (point de sécurité du navigateur, nous en reparlerons).

Pour arrêter le Live Server dans vscode : cliquez en bas à droite sur l'onglet suivant :
**Port: 5500**

Remarque : le port peut éventuellement être différent.

