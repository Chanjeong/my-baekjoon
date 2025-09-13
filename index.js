let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  const T = Number(input[i]);
  const dp = new Array(T + 1).fill(1);
  dp[1] = dp[2] = dp[3] = 1;

  for (let j = 4; j <= T; j++) {
    dp[j] = dp[j - 3] + dp[j - 2];
  }
  console.log(dp[T]);
}
