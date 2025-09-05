let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = input[0].split('').map(Number);
const sorted = n.sort((a, b) => b - a);

const sum = sorted.reduce((acc, curr) => acc + curr, 0);
if (sum % 3 !== 0 || sorted[sorted.length - 1] !== 0) console.log(-1);
else console.log(sorted.join(''));
