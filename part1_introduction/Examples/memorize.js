
function fact(n){

    if(!fact[n]){
        console.log('value', n) ;
        fact[n] = n > 0 ? n * fact(n -1) : 1;
    }

    return fact[n];
}

console.log( 'fact', fact(5) ) ;

fact(15);
