function Pipe () {
  const args = arguments;
  return function (z) {
    for(let x = 0, max = args.length; x < max; x++) {
      z = args[x](z);
    };
    return z;
  };
};

module.exports = Pipe;
