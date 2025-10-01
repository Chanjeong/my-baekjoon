let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);

const coins = input.slice(1).map(Number);

const dp = new Array(k + 1).fill(Infinity);
dp[0] = 0;
for (let coin of coins) {
  for (let i = coin; i <= k; i++) {
    if (dp[i - coin] !== Infinity) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
}
console.log(dp);
console.log(dp[k] === Infinity ? -1 : dp[k]);
