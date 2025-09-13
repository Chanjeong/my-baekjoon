let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let currentSum = arr[0];
let maxNum = arr[0];
for (let i = 1; i < n; i++) {
  currentSum = Math.max(arr[i], currentSum + arr[i]);
  maxNum = Math.max(maxNum, currentSum);
}
console.log(maxNum);
