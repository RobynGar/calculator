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

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
