// This problem was asked by Jane Street.

// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair.
// For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

// Given this implementation of cons:
function cons (a, b) {
  function pair (f) {
    return f(a, b)
  }
  return pair
}

// Implement car and cdr

function car (f) {
  return f((a, b) => a)
}

function cdr (f) {
  return f((a, b) => b)
}

module.exports = {
  cons,
  car,
  cdr
}
