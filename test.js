var c = require('./curry.js')

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

var tester = c(t1, print, t2, print)

tester(1)
