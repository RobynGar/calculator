const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    
    expected = 200;
    actual = sum(100, 100);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -100;
    actual = sum(-50, -50);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = -100;
    actual = sum(0, -100);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  
  test('can subtract two small positive numbers', () => {
    expected = 5;
    actual = subtract(10, 5);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => {
    expected = 200;
    actual = subtract(400, 200);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -5;
    actual = subtract(-6, -1);
    expect(actual).toBe(expected);
  });

  test('can subtract when one number is 0', () => {
    expected = 10;
    actual = subtract(10, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 5;
    actual = multiply(1, 5);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => {
    expected = 5000;
    actual = multiply(100, 50);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 137216;
    actual = multiply(-268, -512);
    expect(actual).toBe(expected);
  });

  test('can multiply when one number is 0', () => {
    expected = 0;
    actual = multiply(10, 0);
    expect(actual).toBe(expected);
  });
});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 5;
    actual = divide(45, 9);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => {
    expected = 50;
    actual = divide(5000, 100);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 5;
    actual = divide(-50, -10);
    expect(actual).toBe(expected);
  });

  test('can divide when one number is 0', () => {
    expected = NaN;
    actual = divide(10, 0);
    expect(actual).toBe(expected);
  });

  test('can divide by decimals', () => {
    expected = 2;
    actual = divide(1, 0.5);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {
  test('the modulus of two small positive numbers', () => {
    expected = 3;
    actual = modulus(13, 5);
    expect(actual).toBe(expected);
  });

  test('the modulus of two large positive numbers', () => {
    expected = 3;
    actual = modulus(203, 100);
    expect(actual).toBe(expected);
  });

  test('the modulus of two negative numbers', () => {
    expected = -3;
    actual = modulus(-13, -5);
    expect(actual).toBe(expected);
  });

  test('the modulus of one number is 0', () => {
    expected = NaN;
    actual = modulus(10, 0);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('a even small number', () => {
    expected = true;
    actual = even(4);
    expect(actual).toBe(expected);
  });

  test('a large even number', () => {
    expected = true;
    actual = even(100);
    expect(actual).toBe(expected);
  });

  test('a even negative number', () => {
    expected = true;
    actual = even(-10);
    expect(actual).toBe(expected);
  });

  test('number is 0', () => {
    expected = true;
    actual = even(0);
    expect(actual).toBe(expected);
  });

  test('a odd number', () => {
    expected = false;
    actual = even(5);
    expect(actual).toBe(expected);
  });
});

describe('odd', () => {

  test('a even number', () => {
    expected = false;
    actual = odd(4);
    expect(actual).toBe(expected);
  });

  test('a small odd number', () => {
    expected = true;
    actual = odd(7);
    expect(actual).toBe(expected);
  });

  test('a large odd number', () => {
    expected = true;
    actual = odd(53687);
    expect(actual).toBe(expected);
  });

  test('a negative odd number', () => {
    expected = true;
    actual = odd(-11);
    expect(actual).toBe(expected);
  });

  test('a 0', () => {
    expected = false;
    actual = odd(0);
    expect(actual).toBe(expected);
  });

});
