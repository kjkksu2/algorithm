let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

function print() {
  const ans = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== -1) ans.push(input[i]);
  }
  console.log(ans.join("\n"));
}

function solution() {
  input = input.map(Number).sort((a, b) => a - b);

  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }

  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (sum - input[i] - input[j] === 100) {
        input[i] = -1;
        input[j] = -1;
        print();
        return;
      }
    }
  }
}
solution();
