let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0]);
const dp = Array.from({ length: n + 1 }, (_, i) => Array(i + 1));

dp[n] = input[input.length - 1].split(' ').map(Number);

for (let i = n - 1; i >= 1; i--) {
  const arr = input[i].split(' ').map(Number);

  for (let j = 0; j < arr.length; j++) {
    dp[i][j] = arr[j] + Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
  }
}
console.log(dp[1][0]);
