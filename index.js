let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0]);

const arr = input[1].split(' ').map(Number);

const inc = new Array(n).fill(1);
const dec = new Array(n).fill(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      inc[i] = Math.max(inc[i], inc[j] + 1);
    }
  }
}

for (let i = n - 1; i >= 0; i--) {
  for (let j = n - 1; j > i; j--) {
    if (arr[i] > arr[j]) {
      dec[i] = Math.max(dec[i], dec[j] + 1);
    }
  }
}

let maxLength = 0;
for (let i = 0; i < n; i++) {
  maxLength = Math.max(maxLength, dec[i] + inc[i] - 1);
}
console.log(maxLength);
