let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0]);
const wine = input.slice(1).map(Number);
const dp = new Array(n + 1).fill(0);

dp[1] = wine[0];
dp[2] = wine[0] + wine[1];
dp[3] = Math.max(wine[0] + wine[1], wine[0] + wine[2], wine[1] + wine[2]);

for (let i = 4; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 3] + wine[i - 2] + wine[i - 1],
    dp[i - 2] + wine[i - 1],
    dp[i - 1]
  );
}
console.log(dp[n]);
