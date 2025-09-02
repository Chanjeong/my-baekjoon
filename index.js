let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = +input[0];
const A = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const B = input[2]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
const result = new Array(N).fill(0);
const shit = result.map((_, i) => A[i] * B[i]);
console.log(shit.reduce((a, b) => a + b));
