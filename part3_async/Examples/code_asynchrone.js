const synchroneFunc = () => {
    console.log("Start function");
}

console.log("Start");
synchroneFunc();
console.log("End");

console.log('Start Hello');

setTimeout(()=>{
    console.log('console.log dans settimeout');

}, 500);

console.log('End');
