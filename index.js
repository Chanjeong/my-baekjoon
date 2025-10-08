let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [str1, str2] = input.slice(0).map(e => e.trim());

const dp = Array.from({ length: str1.length + 1 }, () =>
  new Array(str2.length + 1).fill(0)
);

for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

let maxLength = dp[str1.length][str2.length];
let result = '';
let i = str1.length;
let j = str2.length;

while (i > 0 && j > 0) {
  if (str1[i - 1] === str2[j - 1]) {
    result = str1[i - 1] + result;
    i--;
    j--;
  } else {
    if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
}
console.log(maxLength);
if (maxLength) {
  console.log(result);
}
