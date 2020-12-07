
// fonction constructeur

export default function User (name) {
    // un constructeur 
    this.name = name;

    this.getName = function(){
        return this.name;
    }
}