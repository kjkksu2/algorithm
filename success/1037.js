let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

function solution() {
  const count = +input[0];
  const arr = input[1].split(" ").map(Number);

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  console.log(max * min);
}
solution();
