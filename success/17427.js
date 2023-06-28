let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

function solution() {
  const number = +input[0];

  let sum = 0;
  for (let i = 1; i <= number; i++) {
    for (let j = i; j <= number; j += i) {
      sum += i;
    }
  }

  console.log(sum);
}
solution();
