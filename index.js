let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

//#13536 - 괄호 부분 문자열 쿼리
const chars = input[0];
const n = +input[1];

for (let i = 2; i <= n + 1; i++) {
  const [first, last] = input[i].split(' ').map(Number);
  const substring = chars.slice(first - 1, last);

  let stack = [];
  let count = 0;
  for (let j = 0; j < substring.length; j++) {
    if (substring[j] === ')') {
      if (stack.length > 0) {
        stack.pop();
        count += 2;
      } else continue;
    } else {
      stack.push(substring[j]);
    }
  }
  console.log(count);
}
//9012 괄호
//10828 스택
//10773 제로
//2164 카드2
//10816 숫자 카드 2
//1874 스택 수열
//1764 듣보잡
//1158 요세푸스 문제
//4949 균형잡힌 세상
//10815 숫자 카드
//9012 괄호
//10828 스택
//10773 제로
//2164 카드2
//10816 숫자 카드
