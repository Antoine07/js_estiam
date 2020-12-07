const Add = (number, callback, error) => {
  if ( parseFloat(number) !=  number) {
    error(number);
  } else {
    setTimeout(() => {
      callback(number);
    }, 500);
  }
};

// throw new Error("ceci n'est pas un nombre")
const error = (err) => console.error(`Ceci n'est pas un nombre ${err}`);

Add(1, (number) => {
  // variable définie au niveau du bloc
  let sum = parseFloat(number);

  Add("12.9", (number) => {
    sum += parseFloat(number); // on récupère la somme précédente

    Add("4.9", (number) => {
      sum += parseFloat(number);

      console.log(sum);
    },error);
  }, error);
}, error);
