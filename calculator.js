const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = (a,b) =>a*b;

const divide = (a, b) => {
    if(a === 0 || b === 0){
        return NaN;
    } else {
    return a / b;
    }
};

const modulus = function(a,b){
    return a%b;
};

const even = (a) => {
    if(a%2===0){
        return true;
    }else{
        return false;
    }
}

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
