const { expect } = require('chai')
const SeedRandom = require('seedrandom')

const estimatePi = require('../src/14-estimate-pi')

describe('14. Estimate PI', function () {
  it('Should work', function () {
    const prng = new SeedRandom('keyboard cat 123')

    expect(estimatePi(3, prng)).to.be.closeTo(Math.PI, 1E-4)
  })
})
