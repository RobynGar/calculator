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

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
