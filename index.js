let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const parts = input[0].split('-');

let result = parts[0].split('+').reduce((acc, cum) => acc + Number(cum), 0);

for (let i = 1; i < parts.length; i++) {
  const sum = parts[i].split('+').reduce((acc, cum) => acc + Number(cum), 0);
  result -= sum;
}
console.log(result);
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
