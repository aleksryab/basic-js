const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;

  const field = Array.from(Array(height), () => Array.from(Array(width), () => 0));

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const bomb = matrix[i][j];

      if (bomb) {
        // horizontal cells
        if (j - 1 >= 0) field[i][j - 1]++;
        if (j + 1 < height) field[i][j + 1]++;

        // vertical cells
        if (i - 1 >= 0) field[i - 1][j]++;
        if (i + 1 < width) field[i + 1][j]++;

        // top diagonals
        if (i - 1 >= 0 && j - 1 >= 0) field[i - 1][j - 1]++;
        if (i - 1 >= 0 && j + 1 < width) field[i - 1][j + 1]++;

        // bottom diagonals
        if (i + 1 < height && j - 1 >= 0) field[i + 1][j - 1]++;
        if (i + 1 < height && j + 1 < width) field[i + 1][j + 1]++;
      }
    }
  }

  return field;
}

module.exports = {
  minesweeper
};
