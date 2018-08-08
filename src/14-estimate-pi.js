// This problem was asked by Google.

// The area of a circle is defined as πr^2.
// Estimate π to 3 decimal places using a Monte Carlo method.

// Explanation: https://pastebin.com/6v50sbvW
function pi (precision = 3, prng = Math.random) {
  precision++ // integer part accounts for precision as well

  const circleRadius = 1
  const squareSide = circleRadius * 2
  const squareArea = squareSide * squareSide

  let estimate = 1
  let [pointsIn, pointsTotal] = [0, 0]
  let threshold = Math.pow(10, -precision)

  while (Math.abs(Math.PI - estimate) > threshold) {
    let [x, y] = [prng(), prng()]
    let hypot = Math.hypot(x, y)

    pointsIn += (hypot <= circleRadius)
    pointsTotal++

    estimate = squareArea * (pointsIn / pointsTotal)
  }

  return estimate
}

module.exports = pi
