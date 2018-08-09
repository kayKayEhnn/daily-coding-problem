const { expect } = require('chai')

const longestPath = require('../src/17-longest-path')

describe('17. Longest Path', function () {
  it('Should work for normal case', function () {
    let result = longestPath('dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext')

    expect(result).to.equal(32)
  })

  it('Should work with no files', function () {
    let result = longestPath('dir\ndir2\n\tsubdir1')

    expect(result).to.equal(0)
  })

  it('Should work multiple depth switches', function () {
    let result = longestPath('dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\ndir2\n\tsubdir2\n\t\tfile.ext')

    expect(result).to.equal(21)
  })
})
