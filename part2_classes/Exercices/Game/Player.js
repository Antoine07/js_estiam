
// on l'export avec export, default indique l'export par défaut un seul par fichier
export default class Player {

    static power = .9; // 0.9 équivalent à .9 en JS

    // const dragon ={ life : 120, force : 1.1, shot : 0, name : 'Alan' }
    // new Player(dragon) // les clés de dragon sont récupérées par décomposition
    constructor({ life, force, shot, name }) {
        this._life = life;
        this._force = force;
        this._shot = shot;
        this._name = name;
    }

    // getter
    get name() { return this._name; }
    get force() { return this._force; }
    get life() { return this._life; }
    get shot() { return this._shot; }

    //setter
    set name(name) {
        this._name = name;
    }

    set force(force) {
        if (parseFloat(force) == force) {
            this._force = force;

            return;
        }

        console.log("Bad value force");
    }

    set life(life) {
        if (parseFloat(life) == life) {
            this._life = life;

            return;
        }
        console.log("Bad value life");
    }

    set shot(shot) {
        if (parseInt(shot) == shot) {
            this._shot = shot;

            return;
        }
        console.log("Bad value shot");
    }

    hit(){
        return Player.power * this._force;
    }
}