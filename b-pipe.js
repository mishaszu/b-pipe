function curry () {
  var args = arguments
  return function (z) {
    for(var x = 0, max = args.length; x < max; x++) {
      z = args[x](z)
    }
    return z
  }
}

module.exports = curry
