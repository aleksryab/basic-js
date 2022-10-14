const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction) {
    this.isDirect = direction === false ? false : true;
  }

  checkArgs(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
  }

  firstCharCode = 65;
  chars = 26;
  lastCarCode = this.firstCharCode + this.chars;

  encrypt(message, key) {
    this.checkArgs(message, key);
    return this.codder(message, key, 'encrypt');
  }

  decrypt(message, key) {
    this.checkArgs(message, key);
    return this.codder(message, key, 'decrypt');
  }

  codder(message, key, mode = 'encrypt') {
    const wordMap = message.split(' ').map((word) => word.length);
    message = message.replace(/ /g, '').toUpperCase();

    key = key.toUpperCase().repeat(Math.ceil(message.length / key.length));
    let code = '';

    for (let i = 0; i < message.length; i++) {
      const letterCode = message.charCodeAt(i);

      if (letterCode < this.firstCharCode || letterCode > this.lastCarCode) {
        code += message[i];
      } else {
        const letterIndex = letterCode - this.firstCharCode;
        const keyIndex = key.charCodeAt(i) - this.firstCharCode;
        let codeIndex;

        if (mode === 'decrypt') {
          codeIndex = (letterIndex - keyIndex + this.chars) % this.chars;
        } else {
          codeIndex = (letterIndex + keyIndex) % this.chars;
        }
        code += String.fromCharCode(this.firstCharCode + codeIndex);
      }
    }

    let index = 0;
    let readableCode = wordMap.map((wordLength) => {
      const word = code.slice(index, index + wordLength);
      index += wordLength;
      return word;
    });

    readableCode = readableCode.join(' ');

    return this.isDirect ? readableCode : readableCode.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
