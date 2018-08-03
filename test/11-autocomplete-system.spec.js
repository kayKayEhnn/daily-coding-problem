const { expect } = require('chai')

const autocompleteSystem = require('../src/11-autocomplete-system')

const testCases = [
  [
    ['de', ['dog', 'deer', 'deal']],
    ['deer', 'deal']
  ],
  [
    ['', ['dog', 'deer', 'deal']],
    ['dog', 'deer', 'deal']
  ],
  [
    ['dog', ['dog', 'deer', 'deal']],
    ['dog']
  ],
  [
    ['de', ['dog', 'deer', 'deer2']],
    ['deer', 'deer2']
  ],
  [
    ['de', []],
    []
  ]
]

describe('11. Autocomplete System', function () {
  testCases.forEach(tc => {
    it(`Should work for ${tc[0]}`, function () {
      expect(autocompleteSystem.apply(null, tc[0])).to.deep.equal(tc[1])
    })
  })
})
