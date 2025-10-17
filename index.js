let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = +input[0];
let deque = [];
let result = [];
for (let i = 1; i <= n; i++) {
  const [order, num] = input[i].trim().split(' ');
  switch (order) {
    case 'push_front':
      deque.unshift(+num);
      break; // 이게 핵심!
    case 'push_back':
      deque.push(+num);
      break;
    case 'pop_front':
      result.push(deque.length ? deque.shift() : -1);
      break;
    case 'pop_back':
      result.push(deque.length ? deque.pop() : -1);
      break;
    case 'size':
      result.push(deque.length);
      break;
    case 'empty':
      result.push(deque.length ? 0 : 1);
      break;
    case 'front':
      result.push(deque.length ? deque[0] : -1);
      break;
    case 'back':
      result.push(deque.length ? deque[deque.length - 1] : -1);
      break;
  }
}
console.log(result.join('\n'));
