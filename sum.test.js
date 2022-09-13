const capitalize = require('./sum');


test('charisma to be Charisma', () => {
  expect(capitalize('charisma')).toBe('Charisma')
});


const reverseString = require('./reverseString');
test('reverse string', () => {
  expect(reverseString('developer')).toMatch('repoleved')
});


const calculator = require('./calculator');
test('calculator functions', () => {
  expect(calculator.add(10,4)).toBe(14);
  expect(calculator.subtract(40,10)).toBe(30);
  expect(calculator.divide(8,2)).toBe(4);
  expect(calculator.multiply(15,3)).toBe(45);
})


const caesarCipher = require('./caesarCipher');
test('characters have been shifted', () => {
  expect(caesarCipher('Defend the east wall of the castle!', 1)).toMatch('Efgfoe uif fbtu xbmm pg uif dbtumf!');
  expect(caesarCipher('Defend the east wall of the castle!', 5)).toMatch('Ijkjsi ymj jfxy afqq tk ymj hfxyqj!');
})



const analyzeArray = require('./analyzeArray');
const object = {
  average: 4,
  min: 1,
  max: 8,
  length: 6
}
test('array has been analyzed', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toMatchObject(object);
})

