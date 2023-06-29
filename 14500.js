let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1).map((v) => v.split(" ").map(Number));
const visited = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

// https://tesseractjh.tistory.com/256
// https://ongveloper.tistory.com/312
const offset = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function dfs(x, y, depth, sum) {
  for (const [dx, dy] of offset) {
    const nx = x + dx;
    const ny = y + dy;

    // board를 안 벗어나고
    if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    visited[i][j] = 1;
    dfs(i, j, 0, board[i][j]);
    visited[i][j] = 0;
  }
}
