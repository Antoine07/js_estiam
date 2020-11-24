
class Parser {
    constructor(motif) {
        this._motif = motif;
        this._str = ''; // variable pour stocker le résultat attendu
    }

    // un peu facultatif ici ...
    get motif(){
        return this._motif;
    }

    get str(){
        return this._str;
    }

    set str(str){
        this._str = str;
    }

    parse(phrase){
        this._str = phrase
            .split(this._motif) // tableau spliter avec le motif
            .map( word => word.trim()) // nettoyer les données on retire les espaces avant et après
            .filter( word => parseInt(word) == word )// condition pour vérifier que word est un entier
            .join(' ')
    }
}

const parser = new Parser(':');
const phrase = '8790: bonjour le monde:8987:7777:Hello World:    9007';
parser.parse(phrase);

console.log(parser.str);

parser.str = '';