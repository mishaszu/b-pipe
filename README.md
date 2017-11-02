# b-pipe

Creating functions pipe. If you'd like to create function chain, where first function output is second function input.

## how to

B-pipe accept function as parameter and return pipe function.
Functions are executed in order, from first to last.

```
const pipe = require('b-pipe')

const my_pipe = pipe(func1, func2, func3)

//or

pipe(func1, func2, func3).("test")
```

**Example**

```
const pipe = require('b-pipe')

console.log(pipe(add, multi).(10)) // returns 30

function add(num) {
  return num + 5
}

function multi(num) {
  return num * 2
}
```


