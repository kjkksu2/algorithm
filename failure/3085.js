let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

/*
    https://www.acmicpc.net/board/view/58247
*/

function countCandies(arr, length, idx, target) {
  // 행 확인
  let row_count = 0;
  let max_row_count = 0;
  for (let i = 0; i < length; i++) {
    if (arr[idx][i] === target) {
      row_count++;
    } else {
      max_row_count = Math.max(max_row_count, row_count);
      row_count = 0;
    }
  }
  max_row_count = Math.max(max_row_count, row_count); // 행이 전부 연속인 경우

  // 열 확인
  let column_count = 0;
  let max_column_count = 0;
  for (let i = 0; i < length; i++) {
    if (arr[i][idx] === target) {
      column_count++;
    } else {
      max_column_count = Math.max(max_column_count, column_count);
      column_count = 0;
    }
  }
  max_column_count = Math.max(max_column_count, column_count); // 열이 전부 연속인 경우

  return Math.max(max_row_count, max_column_count);
}

function swap(arr, { i0, j0 }, { i1, j1 }) {
  const temp = arr[i0][j0];
  arr[i0][j0] = arr[i1][j1];
  arr[i1][j1] = temp;
}

function solution() {
  const length = +input[0];
  const arr = [];
  let max = 0;

  input.slice(1).forEach((c) => {
    const str = [];
    for (let i = 0; i < c.length; i++) {
      c[i] !== "\r" && str.push(c[i]);
    }
    arr.push(str);
  });

  // 열 바꾸기
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      swap(arr, { i0: i, j0: j }, { i1: i, j1: j + 1 });
      max = Math.max(max, countCandies(arr, length, j, arr[i][j]));
      max = Math.max(max, countCandies(arr, length, j + 1, arr[i][j + 1]));
      swap(arr, { i0: i, j0: j }, { i1: i, j1: j + 1 });
    }
  }

  // 행 바꾸기
  for (let j = 0; j < length; j++) {
    for (let i = 0; i < length - 1; i++) {
      swap(arr, { i0: i, j0: j }, { i1: i + 1, j1: j });
      max = Math.max(max, countCandies(arr, length, i, arr[i][j]));
      max = Math.max(max, countCandies(arr, length, i + 1, arr[i + 1][j]));
      swap(arr, { i0: i, j0: j }, { i1: i + 1, j1: j });
    }
  }

  console.log(max);
}
solution();
