let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);

const dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(0));

for (let i = 0; i <= n; i++) {
  dp[i][0] = 1;
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= Math.min(i, k); j++) {
    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % 10007;
  }
}

console.log(dp[n][k]);
