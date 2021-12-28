const memoize = require('lodash.memoize');

const testMap = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const testFunc = memoize((key) => {
  console.log('rendering');
  return testMap[key];
});

console.log(testFunc('hats'));
console.log(testFunc('hats'));
console.log(testFunc('hats'));
console.log(testFunc('hats'));

testMap.hats = 10;

console.log(testFunc('hats'));
console.log(testFunc('hats'));
console.log(testFunc('hats'));
console.log(testFunc('hats'));
