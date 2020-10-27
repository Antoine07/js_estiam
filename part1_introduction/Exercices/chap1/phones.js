// Le tableau JS c'est un objet
const phones = [
    { name: "iphone XX", priceHT: 900 }, // un autre objet donc une autre référence dans la référence phones
    { name: "iphone X", priceHT: 700 },
    { name: "iphone B", priceHT: 200 },
];

// map retourne un nouveau tableau
const phonesTTC = phones.map(phone => {
    // phone['priceTTC'] = 1; // fait muter l'objet parcouru

    // nouvelle référence 
    //return { name : phone.name, priceHT : phone.priceHT, priceTTC : 1};

    // une autre solution avec le spread operator
    const p = { ...phone }; // copie peu profonde pour simple qu'un niveau 
    p['priceTTC'] = phone.priceHT * (1 + .2);

    return p;
});

console.log(phonesTTC);
console.log(phones);

// Deuxième version

console.log('------------------------------');

// map retourne un nouveau tableau
const phonesTTC_v2 = phones.map(phone => {
    
    // spread operator + une nouvelle clé => nouvel objet (nouvel référence)
    // spread operator propage les clés/valeurs dans le nouvel objet littéral
    return { ...phone, priceTTC : (phone.priceHT * (1 + .2 )) }
});

console.log(phonesTTC_v2);
console.log(phones);
