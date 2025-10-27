let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let stack = [];
let count = 0;
const steel = input[0].split('');

for (let i = 0; i < steel.length; i++) {
  if (steel[i] === '(') {
    stack.push('(');
  } else {
    // 닫는 괄호를 만났을 때
    stack.pop();

    // 이전 문자가 '('면 레이저
    if (steel[i - 1] === '(') {
      count += stack.length; // 레이저로 잘린 조각들
    } else {
      // 이전 문자가 ')'면 쇠막대기 끝
      count += 1; // 막대기 1개 추가
    }
  }
}

console.log(count);
