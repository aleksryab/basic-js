const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (!Number.isInteger(n)) return;

  n = n.toString();
  const numbers = [];

  for (let i = 0; i < n.length; i++) {
    const temp = n.split('');
    temp.splice(i, 1);
    numbers.push(temp.join('') * 1);
  }

  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
