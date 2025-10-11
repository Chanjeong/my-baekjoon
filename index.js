let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = +input[0];

const arr = input.slice(1).map(e => e.split(' ').map(Number));

// dp[i][j] = i번째 행렬부터 j번째 행렬까지 곱하는 최소 연산 횟수
const dp = Array.from({ length: n }, () => new Array(n).fill(0));

// 구간 길이별로 계산 (길이 2부터 시작)
for (let len = 2; len <= n; len++) {
  // 시작 위치
  for (let i = 0; i <= n - len; i++) {
    const j = i + len - 1; // 끝 위치
    dp[i][j] = Infinity; // 최솟값을 찾기 위해 무한대로 초기화

    // i~j를 k 위치에서 끊어서 계산
    for (let k = i; k < j; k++) {
      // (i~k) × (k+1~j) 로 나눠서 계산
      // 왼쪽 결과: arr[i][0] × arr[k][1]
      // 오른쪽 결과: arr[k+1][0] × arr[j][1] (arr[k+1][0] === arr[k][1])
      // 두 개를 곱하는 비용: arr[i][0] × arr[k][1] × arr[j][1]
      const cost = dp[i][k] + dp[k + 1][j] + arr[i][0] * arr[k][1] * arr[j][1];
      dp[i][j] = Math.min(dp[i][j], cost);
    }
  }
}

console.log(dp[0][n - 1]);
