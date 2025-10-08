let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = +input[0];
let fibCount = 0;
let fibonacciCount = 0;

function fib(n) {
  if (n === 1 || n === 2) {
    fibCount += 1;
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

function fibonacci(n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[n] = dp[n - 1] + dp[n - 2];
    fibonacciCount += 1;
  }
}
fib(n);
fibonacci(n);
console.log(fibCount, fibonacciCount);
