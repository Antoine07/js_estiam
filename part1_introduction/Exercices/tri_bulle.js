let a = [6, 8, 110, 2, 11, 0, 500, 3];
for (let i = 0; i < (a.length - 1); i++) {
    if ( a[i] > a[i + 1] ) {
        // on garde a[i+1] dans une variable temp
        // puis on permute les valeurs
        // donc a[i+1] est écrasé
        // on récupère la valeur de a[i+1] dans tmp
        // pour la passer à a[i]
        let tmp = a[i+1];
        a[i + 1] = a[i];
        a[i] = tmp;
        // En ES6 on peut utiliser le destructuring
        // pour permuter les valeurs
        // [ a[i+1], a[i] ] = [ a[i], a[i+1] ];
    }
}
// console.log(a);
/*
[6, 8, 110, 2, 11, 0, 500, 3]
[6, 8, 110, 2, 11, 0, 500]
[6, 8, 110, 2, 11, 0]
[6, 8, 110, 2]
[6, 8, 110]
[6, 8]
[6]
*/
// on part de la longueur du tableau
for (let i = a.length; i > 0; i--) {
    let result = [];
    //console.log('len de la liste', i)
    // premier passage s'affiche tout le tableau
    // deuxième passage s'affiche le tableau length - 1
    // ...
    // le i décroit à cause de la première boucle
    for (let j = 0; j < i; j++) {
        result.push(a[j]);
    }
    console.log(result);
}