// This problem was asked by Google.

// Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non - cyclical.
// For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

// (1) In this example, assume nodes with the same value are the exact same node objects.
// Do this in O(M + N) time(where M and N are the lengths of the lists) and constant space.

// We can find La and Lb.
// Intersection has to be after at least Abs(La-Lb)

function listIntersection (a, b) {
  let [aLength, bLength] = [getListLength(a), getListLength(b)]
  let [aIx, bIx] = [0, 0]

  let diff = Math.abs(aLength - bLength)
  if (aLength > bLength) aIx = diff // imagine this is O(n) too
  else bIx = diff

  while (a[aIx] !== b[bIx]) { // 1.
    aIx++
    bIx++
  }

  return aLength - aIx

  // In linked list this is O(n)
  function getListLength (list) {
    let len = 0
    for (let i = 0; i < list.length; i++) {
      len++
    }

    return len
  }
}

module.exports = listIntersection
