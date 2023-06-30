let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

// https://tesseractjh.tistory.com/256

const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1).map((v) => v.split(" ").map(Number));
const visited = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
let max = -Infinity;

const offset = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function dfs(x, y, depth, sum) {
  // 모양을 만들면
  if (depth === 4) {
    max = Math.max(max, sum);
    return;
  }

  for (const [dx, dy] of offset) {
    const nx = x + dx;
    const ny = y + dy;

    // board를 안 벗어나고
    if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
      // 아직 방문 안했으면
      if (!visited[nx][ny]) {
        // ㅗ, ㅓ, ㅜ, ㅏ 모양 만들기
        if (depth === 2) {
          visited[nx][ny] = 1;
          dfs(x, y, depth + 1, sum + board[nx][ny]);
          visited[nx][ny] = 0;
        }

        visited[nx][ny] = 1;
        dfs(nx, ny, depth + 1, sum + board[nx][ny]);
        visited[nx][ny] = 0;
      }
    }
  }
}

// dfs를 따라가면 모든 모양이 만들어진다.
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    visited[i][j] = 1;
    dfs(i, j, 1, board[i][j]);
    visited[i][j] = 0;
  }
}

console.log(max);
