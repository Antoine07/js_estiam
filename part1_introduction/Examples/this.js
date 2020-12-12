"use strict";

user();


function user(name) {
    console.log(this)
}



function model() {
    this.table = "Model";

    this.subModel = function () {
        console.log(this)
    }
}

(new model).subModel()

const Model = {
    table: "Model",

    subModel: function () {
        console.log(this)
    }
}

Model.subModel();

// la valeur de this est déterminé par la manière dont on appelle la "méthode"

const o1 = {
    f1: function () {
        console.log(this);
    }
}

// Le this est correctement déterminé
o1.f1();

const o2 = o1.f1;

// Dans ce cas this est undefined
o2();

// Un problème un peu technique même en mode strict 

const log = {
    count : 100,
    save: function () {
        // 'use strict';

        console.log(this.count);
    }
}

setTimeout(log.save, 500);

// Solution pour bien appeler la fonction et faire référence au bon objet