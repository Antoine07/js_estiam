const add = number => ( new Promise((resolve, reject) => {
    setTimeout(() => {
        if( parseFloat(number) != number ) {
            reject(new Error('is not a numeric number'));
            return;
        }
        resolve( parseFloat(number) );
    }, 500);
    })
);


const res = add( "19.9" ) // la promesse qu'on a défini qui est exécutée
    .then( num => num + 1) // notre retourne une promesse
    .then( num => num + 3)
    .then(num => num + 19.5) // par d'erreur car ce n'est plus notre promesse
    .then( num => {
        console.log('------ permiere version sans retourner notre promesse')
        console.log(num);
    })
    .catch( err => console.error(err));

console.log(res); // c'est du type promesse


// meme style que callback hell 

add( 19.9 ) // la promesse qu'on a défini qui est exécutée
    .then( num => add(num + 1)) 
    .then( num => add(num + 2)) 
    // .then( num => add("Bonjour"))  // ici l'erreur que l'on a programmé est retournée
    .then( num => {
        console.log('------ permiere version en retournant notre promesse')
        console.log(num);
    })
    .catch( err => console.error(err));


// Addition de deux nombres avec une fonction qui retourne une Promesse
const add_v2 = (num1, num2) => ( new Promise((resolve, reject) => {
    setTimeout(() => {
        if( parseFloat(num1) != num1  || parseFloat(num2) != num2) {
            reject(new Error('is not a numeric number'));
            return;
        }
        resolve( parseFloat(num1) + parseFloat(num2) );
    }, 500);
    })
);

add_v2(1, 2)
    .then( res => {
        console.log('------ deuxième version add_v2(1,2) ')
        console.log(res);
    })
    .catch (err => console.error(err) );