const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = (a,b) =>a*b;

const divide = (a, b) => {
    if(a === 0 || b === 0){
        return null;
    } else {
    return a / b
    }
};

const modulus = null;

const even = null;

const odd = null;

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
