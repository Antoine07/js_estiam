const CounterV1 = {
    count: 0,
    counter: function () {
        setInterval(function () {
            this.count++;
            console.log(this.count); // un problème au niveau du this on perd le context souhaité (Counter)
        }, 1000);
    },
};
// CounterV1.counter();

const CounterV2 = {
    count: 0,
    counter: function () {
        console.log(this.count);
        // on mémorise l'objet this dans une variable
        const that = this;
        setInterval(function () {
            that.count++;
            console.log(that.count);
        }, 1000);
    }
};
// CounterV2.counter();

const CounterV3 = {
    count: 0,
    counter: function () {
        console.log(this.count);
        setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    },

    counter2() {
        console.log(this.count);
        setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
};
// CounterV3.counter();

// JS 

// c'est un constructeur de l'objet fonction
function model(name){
    this.name = name ;

    console.log(this.name);
}

const m1 = new model("Alan");
const m2 = new model("Alan2");

// Dans ce cas c'est undefined car pas de new
console.log(model("alan"))


// Quand est il des fonctions fléchées ?

// Pas de constructeur dans une fonction fléchée ce qui suit provoque une erreur 
// on ne peut pas faire un new sur une fonction fléchée
const mdelArrow = (name) => {
    this.name = name ;

    console.log(this.name);
}

// Pas possible 
// const mA1 = new mdelArrow("Alan");
// const mA2 = new mdelArrow("Alan2");