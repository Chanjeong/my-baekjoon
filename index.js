let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 0; i < T; i++) {
  const [n, k] = [+input[i * 2 + 1], +input[i * 2 + 2]];

  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

  for (let j = 0; j < k; j++) {
    dp[0][j + 1] = j + 1;
  }

  for (let floor = 1; floor <= n; floor++) {
    for (let room = 1; room <= k; room++) {
      dp[floor][room] = dp[floor][room - 1] + dp[floor - 1][room];
    }
  }
  console.log(dp[n][k]);
}
