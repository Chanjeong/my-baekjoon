let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const dp = new Array(n).fill(0);
dp[0] = arr[0];

for (let i = 1; i < n; i++) {
  dp[i] = arr[i];
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + arr[i]);
    }
  }
}
console.log(Math.max(...dp));
