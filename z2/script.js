function getResult(arr) {
    for(let i = 0; i < arr.length/2; i++) {
        if(arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
        
    }
    return true;
    
}

console.log(getResult([2, 15, 15, 32, 2]));
console.log(getResult([5, 5, 6, 6, 7, 7]));
console.log(getResult([4, 4, 4]));
console.log(getResult([4, 5, 8, 22]));
