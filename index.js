let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(...input[i].split(' ').map(Number));
}

console.log(arr.sort((a, b) => a - b).join(' '));
