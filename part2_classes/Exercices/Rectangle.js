
class Rectangle {
    constructor(w, h) {
        this._w = w;
        this._h = h;
    }

    area(){
        return this._w * this._h;
    }

    set w(w) {
        if (parseFloat(w) == w) {
            this._w = w;

            return;
        }
        console.error('Bad value');
    }

    get w() {
        return this._w;
    }

    set h(h) {
        if (parseFloat(h) == h) {
            this._h = h;

            return;
        }
        console.error('Bad value');
    }

    get h() {
        return this._h;
    }
}

let rect = new Rectangle(1, 2);
rect.w = 10;
// rect.w = "Hello"; // Bad value
rect.h = 5;

console.log(`
Dimension de mon rectangle ${rect.w} largeur ${rect.h} hauteur.
On peut également calculer l'air : ${rect.area()}  m2 ou faire le calcul à la main : ${rect.w * rect.h}.
Nom de la figure : ${rect.name}
`);

class Square extends Rectangle {

    constructor(w){
        // IMPOSSIBLE on ne peut pas définir une propriété avant super
        // this._name = "Square";
        super(w, w);
        this._name = "Square";
    }
}

const square = new Square(5);

console.log(`
Dimension de mon carré ${square.w} largeur ${square.h} hauteur.
On peut également calculer l'air : ${square.w * square.h} m2.
Avec la fonction : ${square.area()} m2.
Nom de la figure : ${square.name}
`);