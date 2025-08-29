let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/SUDURUK/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const a = +input[0];
const b = input[1].split(' ').map(Number);

const sorted = [...b].sort((a, b) => a - b);
const visited = new Array(a).fill(false);
const P = new Array(a);

for (let i = 0; i < a; i++) {
  const target = b[i];

  for (let j = 0; j < a; j++) {
    if (sorted[j] === target && !visited[j]) {
      P[i] = j;
      visited[j] = true;
      break;
    }
  }
}
console.log(P.join(' '));
