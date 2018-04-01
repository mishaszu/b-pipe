const { Pipe, CurriedArgs, PredefinedArgs } = require('../index');

/*
 * test 1
 */
function test1a(testArg) {
  return testArg + 1;
};

function test1b(testArg) {
  return testArg +10;
};

const testPipe1 = Pipe(test1a, test1b);
const res1 = testPipe1(1);
if (res1 !== 12) {
  throw 'Test 1 failed!';
} else {
  console.log('Test 1 passed');
};

/*
 * test 2
 */
function test2 (multi, num) {
  return num * multi;
}

const testPipe2 = PredefinedArgs([2,4], test2, test2);
const res2 = testPipe2(1);
if (res2 !== 8) {
  throw 'Test 2 failed!';
} else {
  console.log('Test 2 passed');
};

/*
 * test 3
 */
function test3(arg1, arg2) {
  return [arg1+1, arg2+1];
};

const testPipe3 = CurriedArgs(test3, test3);
const res3 = testPipe3([1,3]);
if (res3[0] !== 3 && res3[1] !== 5) {
  throw 'Failed test 3!';
} else {
  console.log('Test 3 passed');
}
