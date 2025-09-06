let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const students = input.slice(1).map(el =>
  el.split(' ').map((v, i) => {
    return i === 0 ? v : Number(v);
  })
);
let answer = '';
students.sort((a, b) => {
  return b[1] - a[1] || a[2] - b[2] || b[3] - a[3] || (a[0] > b[0] ? 1 : -1);
});
students.forEach(el => {
  console.log(el[0]);
});
