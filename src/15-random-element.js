// This problem was asked by Facebook.

// Given a stream of elements too large to store in memory,
// pick a random element from the stream with uniform probability.

function randomElement (createStream, cb, prng = Math.random) {
  let stream = createStream()
  let dataLen = 0

  stream.on('data', data => {
    dataLen += data.length
  })

  stream.on('end', () => {
    let randomIx = Math.floor(prng() * dataLen)
    stream = createStream()

    stream.on('data', data => {
      if (randomIx < 0) return void stream.destroy()

      if (randomIx < data.length) cb(null, String.fromCharCode(data[randomIx]))

      randomIx -= data.length
    })
  })

  stream.on('error', cb)
}

module.exports = randomElement
