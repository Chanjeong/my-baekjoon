let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = +input[0];

let a = 1,
  b = 0;

for (let i = 0; i < N; i++) {
  let temp = a;
  a = b;
  b = temp + b;
}
console.log(a, b);
