let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = +input[0];
const P = input[1].split(' ').map(Number);

const sorted = [...P].sort((a, b) => a - b);

const min = [];
const sum = sorted.reduce((acc, cum) => {
  min.push(acc + cum);
  return acc + cum;
}, 0);

console.log(min.reduce((acc, cum) => acc + cum, 0));
