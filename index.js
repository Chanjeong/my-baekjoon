let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const sortedA = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const B = input[3].split(' ').map(Number);

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return 1;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return 0;
}
console.log(B.map(target => binarySearch(sortedA, target)).join('\n'));
