let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = +input[0];

const game = input.slice(1).map(e => e.split(' ').map(Number));

const max = Array.from({ length: n }, () => new Array(3).fill(0));
const min = Array.from({ length: n }, () => new Array(3).fill(0));

for (let i = 0; i <= 2; i++) {
  max[0][i] = game[0][i];
  min[0][i] = game[0][i];
}

for (let i = 1; i < n; i++) {
  max[i][0] = Math.max(max[i - 1][0], max[i - 1][1]) + game[i][0];
  min[i][0] = Math.min(min[i - 1][0], min[i - 1][1]) + game[i][0];

  max[i][1] =
    Math.max(max[i - 1][1], max[i - 1][0], max[i - 1][2]) + game[i][1];
  min[i][1] =
    Math.min(min[i - 1][1], min[i - 1][0], min[i - 1][2]) + game[i][1];

  max[i][2] = Math.max(max[i - 1][2], max[i - 1][1]) + game[i][2];
  min[i][2] = Math.min(min[i - 1][2], min[i - 1][1]) + game[i][2];
}

console.log(Math.max(...max[n - 1]), Math.min(...min[n - 1]));
