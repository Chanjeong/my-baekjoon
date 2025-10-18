let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = +input[0];
const heap = [];

for (let i = 1; i <= n; i++) {
  const num = +input[i];

  if (num === 0) {
    console.log(heap.length ? heap.shift() : 0);
  } else {
    let left = 0;
    let right = heap.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (heap[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    heap.splice(left, 0, num);
  }
}
