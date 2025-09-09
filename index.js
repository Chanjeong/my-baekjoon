let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0]);

let dp = new Array(n + 1).fill(0);
dp[1] = 0;

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
}

console.log(dp[n]);

// "항상 가능한 방법부터 시작"
// 1을 빼는 연산은 모든 자연수에 대해 항상 가능
// 이것을 기본값으로 설정
// 그 다음에 더 효율적인 방법(나누기)이 있는지 확인
// "점진적 개선"
// 기본값 → 2로 나누기 → 3으로 나누기 순서로 확인
// 각 단계에서 더 좋은 방법이 있으면 교체
