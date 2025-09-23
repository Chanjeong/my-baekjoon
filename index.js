let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i < input.length; i += 3) {
  const n = Number(input[i]);

  const sticker = [
    input[i + 1].split(' ').map(Number),
    input[i + 2].split(' ').map(Number)
  ];

  const dp = Array.from({ length: 3 }, () => new Array(n).fill(0));

  dp[0][0] = 0;
  dp[1][0] = sticker[0][0];
  dp[2][0] = sticker[1][0];

  for (let j = 1; j <= n; j++) {
    dp[0][j] = Math.max(dp[0][j - 1], dp[1][j - 1], dp[2][j - 1]);
    dp[1][j] = Math.max(dp[0][j - 1], dp[2][j - 1]) + sticker[0][j];
    dp[2][j] = Math.max(dp[0][j - 1], dp[1][j - 1]) + sticker[1][j];
  }
  console.log(Math.max(dp[0][n - 1], dp[1][n - 1], dp[2][n - 1]));
}
