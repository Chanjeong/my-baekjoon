let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = +input[0];
const MOD = 9901;

const dp = Array.from({ length: n }, () => new Array(3).fill(0));

for (let i = 0; i <= 2; i++) {
  dp[0][i] = 1;
}

for (let i = 1; i < n; i++) {
  dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % MOD;
  dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
  dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
}

const sum = (dp[n - 1][0] + dp[n - 1][1] + dp[n - 1][2]) % MOD;
console.log(sum);
