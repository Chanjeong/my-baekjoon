let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/MYLIFE/backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, m, v] = input[0].split(' ').map(Number);

const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

let dfsVisited = new Array(n).fill(false);
let dfsResult = [];

function dfs(node) {
  dfsVisited[node] = true;
  dfsResult.push(node);

  for (let next of graph[node]) {
    if (!dfsVisited[next]) {
      dfs(next);
    }
  }
}

let bfsVisited = new Array(n).fill(false);
let bfsResult = [];

function bfs(start) {
  const queue = [start];
  bfsVisited[start] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    bfsResult.push(node);

    for (let next of graph[node]) {
      if (!bfsVisited[next]) {
        bfsVisited[next] = true;
        queue.push(next);
      }
    }
  }
}
dfs(v);
bfs(v);

console.log(dfsResult.join(' '));
console.log(bfsResult.join(' '));
