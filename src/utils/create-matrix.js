/**
 * Creates matrix
 * @param {number} rows Rows of matrix
 * @param {number} columns Columns of matrix
 * @returns {Array<Array<number>>}
 */
function createMatrix (rows, columns, element = 0) {
  let arr = []

  for (let i = 0; i < rows; i++) {
    arr[i] = new Int32Array(columns)
    for (let j = 0; j < columns; j++) {
      arr[i][j] = element
    }
  }

  return arr
}

module.exports = createMatrix
