// This problem was asked by Facebook.

// A builder is looking to build a row of N houses that can be of K different colors.
// He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

// Given an N by K matrix where the nth row and kth column represents the cost to build the nth house
// with kth color, return the minimum cost which achieves this goal.

const createMatrix = require('./utils/create-matrix')

// We create matrix NxK in which we store min price for first N where N is each color in other dimension
function houseBuilder (matrix) {
  const [n, k] = [matrix.length, matrix[0].length]
  let dp = createMatrix(n, k, -1)
  for (let i = 0; i < k; i++) {
    dp[0][i] = matrix[0][i]
  }

  for (let i = 1; i < n; i++) {
    let minIndices = getMin2Indices(dp[i - 1])
    for (let j = 0; j < k; j++) {
      for (let l = 0; l < minIndices.length; l++) {
        let ix = minIndices[l]
        if (ix === j) continue

        let price = matrix[i][j] + dp[i - 1][ix]
        dp[i][j] = price
      }
    }
  }

  return Math.min(...dp[n - 1])

  function getMin2Indices (arr) {
    let minIxs = arr[0] < arr[1] ? [0, 1] : [1, 0]
    for (let i = 2; i < arr.length; i++) {
      let curr = arr[i]
      if (curr <= arr[minIxs[0]]) {
        minIxs[1] = minIxs[0]
        minIxs[0] = i
      } else if (curr <= arr[minIxs[1]]) {
        minIxs[1] = i
      }
    }

    return minIxs
  }
}

module.exports = houseBuilder
houseBuilder([
  [5, 6, 8],
  [1, 4, 3],
  [3, 2, 1]
])
