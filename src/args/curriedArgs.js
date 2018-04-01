function CurriedArgs () {
  const args = arguments;
  return function (z) {
    for(let x = 0, max = args.length; x < max; x++) {
      z = args[x](z[0], z[1]);
    };
    return z;
  };
};

module.exports = CurriedArgs;
