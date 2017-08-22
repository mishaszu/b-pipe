var pipe = require('./pipe-map.js')

function t1 (x) {
 return x + 1 
}

function t2 (x) {
  return x*10
}

function print(x) {
  console.log(x)
  return x
}

var tester = pipe(t1, print, t2, print)

tester(1)
