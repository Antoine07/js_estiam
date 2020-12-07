const add = (number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseFloat(number) != number) {
        reject(new Error("not a number ..."));

        return;
      }
      resolve(parseFloat(number));
    }, 500);
  });

Promise.all([add(1), add(2), add(3)])
  .then((numbers) => {
    console.log(numbers);
    console.log(numbers.reduce((acc, curr) => acc + curr));
  })
  .catch((err) => console.error(err));

// si une des promesses au moins échoue => aucune n'est résoluez
Promise.all([add(1), add("Bonjour"), add(3)])
  .then((numbers) => {
    console.log(numbers);
    console.log(numbers.reduce((acc, curr) => acc + curr));
  })
  .catch((err) => console.error(err));
