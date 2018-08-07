const fs = require('fs')
const path = require('path')

const { expect } = require('chai')
const SeedRandom = require('seedrandom')

const randomElement = require('../src/15-random-element')

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const dataPath = path.join(__dirname, '../data')

function createStreamFactory (filePath) {
  return function createStream () {
    return fs.createReadStream(filePath)
  }
}

describe('15. Random Element', function () {
  let prng
  beforeEach(function () {
    // prng implementation is imperfect and low sample count leads to uniformity test failing with certain seeds
    prng = new SeedRandom('keyboard cat 123')
  })

  it('Should work with large file', function (done) {
    let createStream = createStreamFactory(path.join(dataPath, 'large-file.txt'))
    let cb = (err, char) => {
      if (err) throw err

      expect(ALPHABET.indexOf(char)).to.be.at.least(0)
      expect(char).to.match(/[A-Z]/)

      done()
    }

    randomElement(createStream, cb, prng)
  })

  it('Should be uniform distribution', function (done) {
    this.slow(1000)

    const iterationCount = 50 * ALPHABET.length
    let iterationsDone = 0
    let histogramMap = new Map()
    for (let i = 0; i < 26; i++) {
      histogramMap.set(ALPHABET[i], 0)
    }

    let createStream = createStreamFactory(path.join(dataPath, 'tiny-file.txt'))
    let cb = (err, char) => {
      if (err) throw err

      histogramMap.set(char, histogramMap.get(char) + 1)

      if (++iterationsDone === iterationCount) {
        verifyUniformity()
      }
    }

    for (let i = 0; i < iterationCount; i++) {
      randomElement(createStream, cb, prng)
    }

    function verifyUniformity () {
      const expected = iterationCount / ALPHABET.length
      const margin = [expected * 0.75, expected * 1.25]

      for (let v of histogramMap.values()) {
        expect(v).to.be.within(margin[0], margin[1])
      }

      done()
    }
  })
})
