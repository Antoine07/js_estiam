const { resolve } = require("path");

const add = (num) =>
  new Promise((resolve, reject) => {
    if (parseFloat(num) != num) {
      throw new Error(`Is not a number ${num}`);
    } else {
      setTimeout(() => resolve(parseFloat(num)), 500);
    }
  }
);

async function process() {
  try {
    let sum = 0;
    const res1 = await add(1); // attendre la résolution de la promesse avant d'exécuter la ligne en-dessous
    sum += res1;
    console.log(sum);
    // const res2 = await add("Bonjour le monde"); // lance une erreur qui sera attrapée dans la partie catch
    const res2 = await add("19.9");
    sum += res2;
    console.log(sum);

    const res3 = await add(5);
    sum += res3;

    console.log(sum);
  } catch (err) {
    console.error(err);
  }
}

console.log("Start");
process();
console.log("End");
