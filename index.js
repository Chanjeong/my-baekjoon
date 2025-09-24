let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0]);

const dp = Array.from({ length: n + 1 }, () => new Array(10).fill(0));

for (let i = 0; i <= 9; i++) {
  dp[1][i] = 1;
}
for (let i = 2; i <= n; i++) {
  for (let j = 0; j <= 9; j++) {
    dp[i][j] =
      dp[i - 1].slice(0, j + 1).reduce((acc, cum) => acc + cum, 0) % 10007;
  }
}

const sum = dp[n].reduce((acc, cum) => acc + cum, 0) % 10007;
console.log(sum);
