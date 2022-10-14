const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  data: [],
  getLength() {
    return this.data.length;
  },
  addLink(value = '') {
    this.data.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)) this.errorValue();
    if (position < 1 || position > this.data.length) this.errorValue();

    this.data.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.data.reverse();
    return this;
  },
  finishChain() {
    const chain = this.data.map((item) => `( ${item} )`).join('~~');
    this.data = [];
    return chain;
  },
  errorValue() {
    this.data = [];
    throw new Error(`You can\'t remove incorrect link!`);
  }
};

module.exports = {
  chainMaker
};
