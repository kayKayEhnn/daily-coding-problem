const { expect } = require('chai')

const MockStream = require('./mock-stream')

describe('Mock Stream', function () {
  it('Should work with no data', function (done) {
    let buffer = Buffer.from('')
    let mockStream = new MockStream(buffer)

    mockStream.on('data', function (data) {
      expect(data).to.deep.equal(buffer)
    })

    mockStream.on('end', done)
  })

  it('Should work with data', function (done) {
    let buffer = Buffer.from('ABC')
    let mockStream = new MockStream(buffer)

    mockStream.on('data', function (data) {
      expect(data).to.deep.equal(buffer)
    })

    mockStream.on('end', done)
  })
})
