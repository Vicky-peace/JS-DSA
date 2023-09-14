// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including)some number n

function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time elapsed: ${t2 - t1} / 1000} seconds`);

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
// printAllPairs(5);

// Big O Shorthands

/* 
1. Arithmethic operations are constant
2.Variable asssignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside a loop
5 .
 */

function logAtleast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
logAtleast5(3);
