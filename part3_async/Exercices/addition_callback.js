const Add = (number, callback) => {
    setTimeout(() => { callback(number); }, 500);
};


Add(1, number => {
    // variable définie au niveau du bloc
    let sum = number;

    Add(2, number => {
        sum += number; // on récupère la somme précédente

        Add(3, number => {
            sum += number;
            
            console.log(sum);
        });
    });
});