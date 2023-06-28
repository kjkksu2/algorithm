let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

function solution() {
  input = input.map(Number);

  for (let i = 0; i < input.length; i++) {
    const number = input[i];

    let n = 1;
    let digit = 1;
    while (true) {
      n %= number;

      if (n === 0) {
        console.log(digit);
        break;
      }

      n = ((n * 10) % number) + (1 % number);
      digit += 1;
    }
  }
}
solution();
