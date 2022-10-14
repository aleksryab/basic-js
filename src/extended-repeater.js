const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str = '', options) {
  const {
    repeatTimes = Number.isInteger(options.repeatTimes) && options.repeatTimes !== 0 ? options.repeatTimes : 1,
    separator = typeof options.separator === 'string' ? options.separator : '+',
    addition = '',
    additionRepeatTimes = Number.isInteger(options.additionRepeatTimes) && options.additionRepeatTimes !== 0 ? options.additionRepeatTimes : 1,
    additionSeparator = typeof options.additionSeparator === 'string' ? options.additionSeparator : '|'
  } = options;

  let additionalStr = '' + addition + ('' + additionSeparator + addition).repeat(additionRepeatTimes - 1);
  let subStr = '' + str + additionalStr;

  return subStr + ('' + separator + subStr).repeat(repeatTimes - 1);
}

module.exports = {
  repeater
};
