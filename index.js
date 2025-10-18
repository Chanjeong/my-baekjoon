let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = +input[0];

for (let i = 1; i < input.length; i += 2) {
  const [num, print] = input[i].split(' ').map(Number);
  const priorities = input[i + 1].split(' ').map(Number);

  const queue = [];
  for (let j = 0; j < num; j++) {
    queue.push({ index: j, priority: priorities[j] });
  }

  let count = 0;

  while (queue.length > 0) {
    const current = queue.shift();

    const hasHigherPriority = queue.some(e => e.priority > current.priority);
    if (hasHigherPriority) {
      queue.push(current);
    } else {
      count += 1;
      if (current.index === print) {
        console.log(count);
        break;
      }
    }
  }
}
