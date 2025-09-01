let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const meetings = input
  .slice(1)
  .map(line => line.split(' ').map(Number))
  .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let count = 0;
let lastEnd = 0;

for (const [s, e] of meetings) {
  if (s >= lastEnd) {
    count++;
    lastEnd = e;
  }
}

console.log(count);
