let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

const maze = input.slice(1).map(e => e.split(' ').map(Number));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    dp[i][j] =
      Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) +
      maze[i - 1][j - 1];
  }
}
console.log(dp[n][m]);
