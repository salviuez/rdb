//console.log(process.argv, process.argv[2]);


const double = (n) => n * 10;

const [, , num] = process.argv;
console.log(double(num));

// console.log(double(process.argv[2]))