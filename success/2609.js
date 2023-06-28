let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

function solution() {
  input = input.join("").split(" ");
  let num1 = +input[0];
  let num2 = +input[1];

  let remainder;
  while (true) {
    remainder = num1 % num2;
    if (remainder === 0) break;
    num1 = num2;
    num2 = remainder;
  }

  const gcd = num2;
  console.log(gcd);
  console.log(gcd * (+input[0] / gcd) * (+input[1] / gcd));
}
solution();
