let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0]);
const dp = new Array(n + 1).fill(0);

dp[0] = 0;
dp[1] = 1;
for (let i = 2; i <= n; i++) {
  dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
}
console.log(dp[n].toString());
