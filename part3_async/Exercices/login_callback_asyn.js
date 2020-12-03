
// asynchrone
const login = (email, password, callback ) => {
    setTimeout(() => {
        callback ( email, password, 'Météo 20degré' ); // une fonction qui appelée ici 
    }, 1000);
};

// logic
login('alan@alan.fr', '123', (email, password, degree) => {
    console.log(' EXECUTION ', email, password, degree);
    const emailCallback = email ;

   // Ici on peut faire ce que l'on veut par exemple modifier le DOM pour afficher quelque chose
});

// les scripts peuvent continuer à s'exécuter de manière asynchrone
console.log("ici je peux traiter d'autre chose dans la page")
