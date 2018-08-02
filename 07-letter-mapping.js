// This problem was asked by Facebook.

// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

function decodeWays (str) {
  let dp = Array.apply(null, { length: str.length + 1 })
  dp[0] = 1 // only 1 way zero letters can be decoded
  dp[1] = 1 // only 1 way one letter can be decoded (0 is not allowed)

  for (let i = 1; i < str.length; i++) {
    let prev = str.charAt(i - 1)
    let current = str.charAt(i)

    let ways = isValid(prev, current) * dp[i - 1] + dp[i]
    dp[i + 1] = ways
  }

  return dp[str.length]

  function isValid (char1, char2) {
    switch (true) {
      case char1 === '1':
      case char1 === '2' && char2 <= '6':
        return true
      default:
        return false
    }
  }
}

module.exports = decodeWays
