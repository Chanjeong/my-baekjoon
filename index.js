let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);

console.log(a.sort((a, b) => a - b)[k - 1]);
