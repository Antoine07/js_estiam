

// Constructeur
function User(name){
    this.name = name;

    console.log(this);
}

// on fait l'instance de la fonction constructeur
let user = new User('Alan');

// avec setter et getter juste une convention pour accéder directement aux propriétés
// de la classe
class Model{
    // constructeur
    constructor(tableName){
        // c'est une convention pour éviter d'accéder directement à la propriété
        this._table = tableName;
        this._status = 'open';// méthode pour définir une propriété
    }

    get table (){
        return this._table;
    }

    // setter utilisation à partir de l'objet m.table le nom du setter
    set table(tableName){
        // on peut maintenant mettre de la logique pour donner
        // une valeur à la propriété _table, par exemple vérifier que 
        // c'est bien une chaîne de caractères.
        this._table = tableName;
    }
}

let m = new Model('post');
m.table = 'posts';

console.log(m.table);
// les variables ne sont par contre pas privée donc on peut toujours y accéder
console.log(m._table); 





