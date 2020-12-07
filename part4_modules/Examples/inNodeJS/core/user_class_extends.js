
import School from './school.js';

export default class Student extends School{

    constructor(name){
        super(name);
        this._name = name;
    }

    get name(){
        return this._name;
    }
}