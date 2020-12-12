const phones = [
    { name: "iphone XX", priceHT: 900 },
    { name: "iphone X", priceHT: 700 },
    { name: "iphone B", priceHT: 200 },
];

// Première version simple map

const pricesTTC = phones.map( phone => phone.priceHT * 1.2); // bien comprendre cette version
console.log(pricesTTC);

// sans modifier le table initial

const pricesTTC_v2 = phones.map( phone => ({ name : phone.name, priceHT : phone.priceHT, priceTTC : phone.priceHT * 1.2 }) );
console.log(pricesTTC_v2);

const pricesTTC_v3 = phones.map( phone => ( { ...phone,  priceTTC : phone.priceHT * 1.2 } ) );
console.log(pricesTTC_v3);