function getResult(arr) {
    return arr.flat(Infinity).reduce((a, b) => a+b, 0);
}

let primer1 = [1, 3, 5];
let primer2 = [-4, 27, -5];
let primer3 = [-3, -8, -17];

console.log(getResult(primer1));
console.log(getResult(primer2));
console.log(getResult(primer3));

// console.log(getResult([5, 5, 5]));