let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);

const dp = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(0));

for (let i = 0; i <= n; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= k; i++) {
  for (let j = 0; j <= n; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j];
    } else {
      dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 1000000000;
    }
  }
}

console.log(dp[k][n]);
