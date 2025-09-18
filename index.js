let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0]);
const schedule = input.slice(1).map(el => el.split(' ').map(Number));

const dp = new Array(n + 2).fill(0);

for (let i = n; i > 0; i--) {
  const [t, p] = schedule[i - 1];

  if (i + t - 1 > n) {
    dp[i] = dp[i + 1];
  } else {
    dp[i] = Math.max(dp[i + 1], dp[i + t] + p);
  }
}

console.log(Math.max(...dp));
