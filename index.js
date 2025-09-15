let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);

const items = [];
for (let i = 1; i <= N; i++) {
  const [W, V] = input[i].split(' ').map(Number);
  items.push({ weight: W, value: V });
}

const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

for (let i = 1; i <= N; i++) {
  const { weight, value } = items[i - 1];

  for (let w = 0; w <= K; w++) {
    dp[i][w] = dp[i - 1][w];

    if (w >= weight) {
      dp[i][w] = Math.max(dp[i][w], dp[i - 1][w - weight] + value);
    }
  }
}

console.log(dp[N][K]);
