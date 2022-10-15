const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const stats = {};

  domains.forEach((item) => {
    item = item.split('.');
    let subDomain = '';
    for (let i = item.length - 1; i >= 0; i--) {
      subDomain += '.' + item[i];
      stats[subDomain] = stats[subDomain] ? stats[subDomain] + 1 : 1;
    }
  });

  return stats;
}

module.exports = {
  getDNSStats
};
