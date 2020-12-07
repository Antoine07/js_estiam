export const PASS = '123';
export const LOGIN = '123';

export const find = (id) => {

    return `ID : ${id}`;
}

export default class Model{
    constructor(tableName){
        this._tableName = tableName;
    }

    get tableName(){
        return this._tableName;
    }
}