let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const dp = Array.from({ length: 21 }, () =>
  Array.from({ length: 21 }, () => new Array(21).fill(-1))
);

function recursive(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 1;
  }

  if (a > 20 || b > 20 || c > 20) {
    return recursive(20, 20, 20);
  }

  if (dp[a][b][c] !== -1) {
    return dp[a][b][c];
  }

  if (a < b && b < c) {
    dp[a][b][c] =
      recursive(a, b, c - 1) +
      recursive(a, b - 1, c - 1) -
      recursive(a, b - 1, c);
  } else {
    dp[a][b][c] =
      recursive(a - 1, b, c) +
      recursive(a - 1, b - 1, c) +
      recursive(a - 1, b, c - 1) -
      recursive(a - 1, b - 1, c - 1);
  }
  return dp[a][b][c];
}

for (let i = 0; i < input.length; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);

  if (a === -1 && b === -1 && c === -1) break;

  console.log(`w(${a}, ${b}, ${c}) = ${recursive(a, b, c)}`);
}
