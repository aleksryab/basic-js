const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  const map = {};
  const newNames = [];

  names.forEach((name) => {
    map[name] = name in map ? map[name] + 1 : 0;
    let suffix = map[name] ? `(${map[name]})` : '';
    let tempName = name + suffix;

    if (newNames.some((it) => it === tempName)) {
      map[name]++;
      suffix = `(${map[name]})`;
      newNames.push(tempName + suffix);
    } else {
      newNames.push(tempName);
    }
  });

  return newNames;
}

module.exports = {
  renameFiles
};
