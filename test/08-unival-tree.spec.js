const { expect } = require('chai')

const { TreeNode, findUnivalSubtrees } = require('../08-unival-tree')

// https://sketch.io/render/sk-a3d64ba04c701b86e4343edb7b9c340c.jpeg
const testCases = [
  [
    [new TreeNode(0)],
    1
  ],
  [
    [new TreeNode(0, new TreeNode(0))],
    1
  ],
  [
    [new TreeNode(0, new TreeNode(0), new TreeNode(1))],
    2
  ],
  [
    [new TreeNode(0, new TreeNode(0), new TreeNode(0))],
    3
  ],
  [
    [new TreeNode(0, new TreeNode(0), new TreeNode(0, new TreeNode(1)))],
    2
  ],
  [
    [new TreeNode(0, new TreeNode(0), new TreeNode(0, new TreeNode(0), new TreeNode(0)))],
    5
  ],
  [
    [new TreeNode(0, new TreeNode(0), new TreeNode(0, new TreeNode(0), new TreeNode(1)))],
    3
  ],
  [
    [new TreeNode(0, new TreeNode(1), new TreeNode(0, new TreeNode(1, new TreeNode(1), new TreeNode(1)), new TreeNode(0)))],
    5
  ],
  [
    [new TreeNode(0, new TreeNode(1), new TreeNode(0, new TreeNode(1, new TreeNode(1), new TreeNode(1)), new TreeNode(1)))],
    6
  ]
]

describe('Unival Tree', function () {
  testCases.forEach((tc, ix) => {
    it(`Should work for test case ${ix}`, function () {
      expect(findUnivalSubtrees.apply(null, tc[0])).to.equal(tc[1])
    })
  })
})
