function compute(a, b) {
    if (b == 1) {
        return a;
    } 
    return a * compute(a, b - 1);
}

console.log(compute(2, 4));



/*

function compute(a, b) {
    let result = 1;

    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

console.log(compute(2, 4));

*/