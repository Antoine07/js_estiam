
const coin = () => (
    new Promise((resolve, reject) => {
        setTimeout(() => Math.random() - .5 > 0 ? resolve("pile") : resolve("face"))
    }, 500)
);

Promise.all([coin(), coin(), coin()]).then(res => {
    const combinations = res.filter(p => p === 'pile');

    if(combinations.length === 3) return 100;
    if(combinations.length === 1) return 0.001;

    return -0.5

}).then(
    gain => console.log(gain)
);

