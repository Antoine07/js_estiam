#### Question 1
Que signifie ECMAScript ?
*Réponses* :
* [ ] C'est un langage de programmation
* [ ] C'est une base de données
* [ ] C'est un service Web
* [ ] C'est un ensemble de normes

#### Question 2
Quels sont les types primitifs en JS ?
*Réponses* :
* [ ] boolean null undefined number bigint
* [ ] boolean null undefined number bigint string symbole
* [ ] Object number string
* [ ] Object boolean null undefined number bigint string symbole

#### Question 3
Quel est le nom de l'attribut ou méthode permettant de calculer la taille d'un Map ?
*Réponses* :
```javascript
const myMap = new Map([1, 2, 3])
```
* [ ] len
* [ ] length
* [ ] size
* [ ] size()

#### Question 4

Comment récupérer en utilisant l'unpacking (décomposition) l'age (95) de la relation d'Yvette ?
```javascript
const populations = [
  { id: 1, name: "Alan" , relation : {
      name : "Alice", age : 45
  }},
   { id: 2, name: "Yvette" , relation : {
      name : "Michel", age : 95
  }},
];
```
*Réponses* :
* [ ] const age = populations.relation.age
* [ ] const { relation : { age } } = populations
* [ ] const { relation : { age } } = populations[1]
* [ ] const { age } = populations.relation

### Question 5

Qu'affiche le code suivant ?
```javascript
const relation = {
    id : 1, relation : [1, 2, 4]
}
const { relation : r } = relation;
const sum = r.reduce((acc, curr) => acc + curr, -7 ) ;
console.log(sum);
```
*Réponses* :
* [ ] 7
* [ ] -7
* [ ] 0
* [ ] null

### Question 6

Que valent les valeurs a, b, c, d dans le code suivant ?
```javascript
let a = 1, b = 2, c = 3, d = 4 ;
[d, c, b, a] = [a, b, c, d];
console.log(a,b,c,d);
```
*Réponses* :
* [ ] 4 3 2 1
* [ ] 2 3 1 4
* [ ] 1 2 3 4
* [ ] 4 4 4 4

### Question 7
Que vaut le merge stMerge ? 
```javascript
const st1 = { s1: "Alan", s2: "Alice" };
const st2 = { s2: "Bernard", s4: "Sophie" };

const stMerge = { ...st1, ...st2 };

console.log(stMerge);
```
*Réponses* :
* [ ] { s1: "Alan", s2: "Alice", s4 : "Sophie" }
* [ ] { s1: "Alan", s2: "Bernard", s4 : "Sophie" }
* [ ] { s1: "Alice", s2: "Bernard", s4 : "Sophie" }
* [ ] { s1: "Alan", s2: "Sophie", s4 : "Sophie" }

### Question 8
Qu'affiche le code suivant ?
```javascript
const t1 = [1, 2];
const t2 = t1;
t1.push(3);
console.log(t1);
```
*Réponses* :
* [ ] Une SyntaxError     
* [ ] `[1,2,3]`
* [ ] `[1,2]`
* [ ] `{1,2,3}`