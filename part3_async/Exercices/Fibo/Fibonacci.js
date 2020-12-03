// (n-1) + (n-2)
// 1 1 2 3 5 8

const fibo = (n) => {
  let [n1, n2] = [0, 1];
  let sum = 0;

  for (let i = 2; i <= n; i++) {
    sum = n1 + n2;
    [n1, n2] = [n2, sum];
  }

  return sum;
};

console.log(fibo(10));

// Async

// algo avec générateur

function* algoFib(n) {
  let [n1, n2] = [0, 1];
  let sum = 0;
  while (true) {
    sum = n1 + n2;
    [n1, n2] = [n2, sum];

    yield sum;
  }
}

// let generator = algoFib();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

const generator = algoFib();
let count = 0;
const interval = setInterval(() => {
  if (count === 10) {
    clearInterval(interval);
    console.log(generator.next());
  } else {
    count++;
    console.log(generator.next());
  }
}, 500);
