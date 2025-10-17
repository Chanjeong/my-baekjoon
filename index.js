let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);

const people = [];
for (let i = 1; i <= N; i++) {
  people.push(i);
}

let result = [];
let index = 0;
while (people.length !== 1) {
  index = (index + K - 1) % people.length;
  result.push(people.splice(index, 1)[0]);
}
result.push(people.pop());

console.log(result);
