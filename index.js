let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = +input[0];
const arr = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);

let maxWeight = 0;
for (let i = 0; i < N; i++) {
  maxWeight = Math.max(maxWeight, arr[i] * (i + 1));
}

console.log(maxWeight);
