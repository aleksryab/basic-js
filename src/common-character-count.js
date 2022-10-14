const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function generateCharsMap(str) {
  const map = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    map[char] = map[char] ? map[char] + 1 : 1;
  }

  return map;
}

function getCommonCharacterCount(s1, s2) {
  let commonChars = 0;

  const mapS1 = generateCharsMap(s1);
  const mapS2 = generateCharsMap(s2);

  for (char in mapS1) {
    commonChars += Math.min(mapS1[char], mapS2[char] || 0);
  }

  return commonChars;
}

module.exports = {
  getCommonCharacterCount
};
