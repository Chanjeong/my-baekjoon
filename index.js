let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0]);

// 이친수는 피보나치 수열과 같습니다
// dp[i] = i자리 이친수의 개수
const dp = new Array(n + 1).fill(0);

dp[1] = 1; // 1자리: 1
dp[2] = 1; // 2자리: 10

for (let i = 3; i <= n; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}

console.log(dp[n].toString());
