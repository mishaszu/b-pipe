function PredefinedArgs () {
  const args = arguments[0];
  const fun = Array.prototype.slice.call(arguments, 1, arguments.length);
  return function (z) {
    for(let x = 0, max = fun.length; x < max; x++) {
      z = fun[x](args[x], z);
    };
    return z;
  };
};

module.exports = PredefinedArgs;
