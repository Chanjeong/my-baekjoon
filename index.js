let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = input[0];
const arr = [];
for (let i = 0; i < n.length; i++) {
  arr.push(n.slice(n.length - 1 - i, n.length));
}
console.log(arr.sort().join('\n'));
