const anim = new Promise((resolve, reject) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const number = Math.floor(Math.random() * 10);
  const letter = letters
    .split("")
    .sort((_) => Math.random() - 0.5)
    .slice(0, 1);
  resolve({ number, letter });
});
