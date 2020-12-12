export const permuteEls =  (className) => {

    /*
        // Exercice 1 correction
        const els = document.querySelectorAll(className);
        // On peut accéder directement aux éléments JS retourne une nodeliste
        // et on peut accéder aux éléments de cette liste à partir
        // des indices comme un tableu
        els[0].querySelector('span').innerHTML = 3; 
        els[1].querySelector('span').innerHTML = 1; 
        els[2].querySelector('span').innerHTML = 2; 

        // Pour répondre à la question avec une boucle
        // On peut créer un tableau puis le parcourir 
        for (const i of [3, 2, 1]) {
            let span = els[i].querySelector('span').innerHTML = i;
        }

    */

    // on sélectionne les li à l'aide de querySelectorAll
    const els = document.querySelectorAll(className);

    /* 
        Pour une liste de 3 éléments le modulo sert juste à décaler le dernier élément vers le premier.
        i = 0, 3 - ( (3 - 0) % 3 ) = 3
        i = 1, 3 - ( (3 - 1) % 3 ) = 3 - 2 = 1
        i = 2, 3 - ( (3 - 2) % 3 ) = 3 - 1 = 2
    */
    for (let i = 0; i < els.length; i++) {
        let span = els[i].querySelector('span').innerHTML = els.length - ( (els.length - i) % els.length);
    }
}