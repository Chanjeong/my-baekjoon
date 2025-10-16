let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = +input[0];
const arr = input.slice(1).map(Number);

let stack = [];
let current = 1;
let result = [];

for (let i = 0; i < n; i++) {
  const target = arr[i];

  // 목표 숫자까지 push
  while (current <= target) {
    stack.push(current++);
    result.push('+');
  }

  // 스택의 top이 목표와 같으면 pop
  if (stack[stack.length - 1] === target) {
    stack.pop();
    result.push('-');
  } else {
    console.log('NO');
    process.exit(0);
  }
}

console.log(result.join('\n'));
