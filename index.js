let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = +input[0];

const stack = input.slice(1).map(e => e.trim().split(' '));

const result = [];
const output = [];

for (let i = 0; i < stack.length; i++) {
  if (stack[i][0] === 'push') {
    result.push(+stack[i][1]);
  } else {
    const order = String(stack[i][0]);
    if (order === 'top') {
      output.push(result.length ? result[result.length - 1] : -1);
    } else if (order === 'size') {
      output.push(result.length);
    } else if (order === 'pop') {
      output.push(result.length ? result.pop() : -1);
    } else if (order === 'empty') {
      output.push(result.length ? 0 : 1);
    }
  }
}

console.log(output.join('\n'));
