// This problem was asked by Google.

// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.
// Given the root to a binary tree, count the number of unival subtrees.

function TreeNode (val, left = null, right = null) {
  this.val = val
  this.left = left
  this.right = right
}

function findUnivalSubtrees (root) {
  return dfs(root)

  function dfs (node) {
    if (node == null) return 0
    if (node.univalCount !== undefined) return node.univalCount

    let childrenUnivalCount = (dfs(node.left) + dfs(node.right))
    node.univalCount = childrenUnivalCount + isUnival(node)

    return node.univalCount

    function isUnival (node) {
      if (typeof node.isUnival !== 'undefined') return node.isUnival

      node.isUnival = ((node.left == null) === (node.right == null) &&
        (node.left === node.right ||
          (node.left.val === node.right.val && isUnival(node.left) && isUnival(node.right))))
      return node.isUnival
    }
  }
}

module.exports = {
  TreeNode,
  findUnivalSubtrees
}
