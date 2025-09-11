// @cursor:disable-ai
let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const n = Number(input[0]);
const stairs = input.slice(1).map(Number);
const dp = new Array(n + 1).fill(0);
dp[1] = stairs[0];
dp[2] = stairs[0] + stairs[1];
for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 2] + stairs[i - 1],
    dp[i - 3] + stairs[i - 2] + stairs[i - 1]
  );
}
console.log(dp[n]);
