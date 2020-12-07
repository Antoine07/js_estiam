import MyModel, { PASS as myPass, LOGIN, find } from './core/Model.js'; // plusieurs export 

const m = new MyModel('posts');
console.log(m.tableName);

console.log(myPass);
console.log(LOGIN);

console.log(find(10));