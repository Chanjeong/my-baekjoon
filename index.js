let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = +input[0];

const house = input.slice(1).map(e => e.split(' ').map(Number));

const dp = Array.from({ length: n + 1 }, () =>
  Array.from({ length: n + 1 }, () => new Array(3).fill(0))
);

dp[1][2][0] = 1;

// 첫 행 초기화 (가로로만 이동 가능)
for (let j = 3; j <= n; j++) {
  if (house[0][j - 1] === 0) {
    dp[1][j][0] = dp[1][j - 1][0];
  }
}

//0 = 가로, 1 = 세로, 2 = 대각선
for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= n; j++) {
    // 현재 칸이 벽이면 스킵
    if (house[i - 1][j - 1] === 1) continue;

    // 가로(0): 왼쪽에서 가로 또는 대각선으로 올 수 있음
    if (house[i - 1][j - 1] === 0) {
      dp[i][j][0] = dp[i][j - 1][0] + dp[i][j - 1][2];
      dp[i][j][1] = dp[i - 1][j][1] + dp[i - 1][j][2];
    }

    // 대각선(2): 3칸 모두 비어있어야 함
    if (
      house[i - 1][j - 1] === 0 &&
      house[i - 2][j - 1] === 0 &&
      house[i - 1][j - 2] === 0
    ) {
      dp[i][j][2] =
        dp[i - 1][j - 1][0] + dp[i - 1][j - 1][1] + dp[i - 1][j - 1][2];
    }
  }
}

const result = dp[n][n].reduce((acc, cum) => acc + cum, 0);
console.log(result);
