let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const arr = input.slice(1).map(Number);

let dp = new Array(Math.max(...arr)).fill([0, 0]);
dp[0] = [1, 0];
dp[1] = [0, 1];

for (let i = 0; i < arr.length; i++) {
  for (let j = 2; j <= arr[i]; j++) {
    dp[j] = [dp[j - 1][0] + dp[j - 2][0], dp[j - 1][1] + dp[j - 2][1]];
  }
  console.log(dp[arr[i]].join(' '));
}
