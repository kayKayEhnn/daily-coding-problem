// This problem was asked by Amazon.

// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.
// Given N, write a function that returns the number of unique ways you can climb the staircase.
// The order of the steps matters.

// What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from
// a set of positive integers X ? For example, if X = { 1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

function stairWays (n, steps = [1, 2]) {
  let dp = [1]

  for (let i = 1; i <= n; i++) {
    let ways = 0
    for (let j = 0; j < steps.length && steps[j] <= i; j++) {
      ways += dp[i - steps[j]]
    }

    dp[i] = ways
  }

  return dp[n]
}

module.exports = stairWays
