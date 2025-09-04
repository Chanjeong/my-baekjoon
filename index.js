let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = +input[0];
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const x = +input[2];

let left = 0;
let right = arr.length - 1;
let count = 0;
while (left < right) {
  let sum = arr[left] + arr[right];
  if (sum === x) {
    count++;
    left++;
    right--;
  } else if (sum < x) {
    left++;
  } else {
    right--;
  }
}
console.log(count);
