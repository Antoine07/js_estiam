
// Tous les export default peuvent être renommé
import superParser from './core/parser_v1.js'; 

import parser_v2 from './core/parser_v2.js'; 

import User_v1 from './core/user_class.js'; 

import User_constructor from './core/user_constructor.js'; 

import User_class from './core/user_class.js'; 

import User_class_extends from './core/user_class_extends.js';

superParser();// fonction fléchée
parser_v2(); // fonction fléchée

const user_v1 = new User_v1('Alan');
console.log(user_v1.name);

const u_c = new User_constructor('Alan');
console.log(u_c.getName());

const u_class = new User_class('Alice');
console.log(u_class.name);

const u_class_ext = new User_class_extends('Bernard');
console.log(u_class_ext.name);
