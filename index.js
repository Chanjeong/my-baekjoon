let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = +input[0];

const arr = input[1].split(' ').map(Number);

const dp = new Array(n).fill(1);
const prev = new Array(n).fill(-1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i] && dp[i] < dp[j] + 1) {
      dp[i] = dp[j] + 1;
      prev[i] = j;
    }
  }
}

let maxLength = Math.max(...dp);
let maxIndex = dp.indexOf(maxLength);

const result = [];

while (maxIndex !== -1) {
  result.push(arr[maxIndex]);
  maxIndex = prev[maxIndex];
}
result.reverse();

console.log(maxLength);
console.log(result.join(' '));
