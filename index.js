let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let cases = input.slice(1).map(item => item.split(' ').map(Number));

for (let i = 0; i < cases.length; i++) {
  if (cases[i].length === 1) {
    let n = cases[i][0];
    let arr = cases.slice(i + 1, i + 1 + n);
    arr.sort(([a, b], [c, d]) => a - c);

    let count = 1; // 첫 번째 지원자는 무조건 선발
    let minInterview = arr[0][1]; // 첫 번째 지원자의 면접 등수

    for (let j = 1; j < arr.length; j++) {
      if (arr[j][1] < minInterview) {
        count++;
        minInterview = arr[j][1]; // 최소 면접 등수 업데이트
      }
    }
    console.log(count);
    i += n; // 다음 테스트 케이스로 이동
  }
}
