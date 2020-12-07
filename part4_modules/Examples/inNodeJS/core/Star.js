export const API_KEY = '123';
export const API_URL = 'http://api.io';

export const degree = (temperature) => {

    return `Temperature : ${temperature}`;
}

const NUMBER_STAR = 100;
const TYPE_STAR = 'pulsar';

export {NUMBER_STAR, TYPE_STAR };

export default class Star{
    constructor(name){
        this.name = name;
    }

    get tableName(){
        return this.name;
    }
}