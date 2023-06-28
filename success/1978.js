let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

function solution() {
  const count = +input[0];
  const arr = input[1].split(" ").map(Number);

  const eratos = Array.from({ length: 1010 });
  eratos[1] = 0;
  for (let i = 2; i <= 1010; i++) {
    if (eratos[i] === undefined) {
      eratos[i] = 1;
    }
    for (let j = i + i; j <= 1010; j += i) {
      eratos[j] = 0;
    }
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (eratos[arr[i]]) sum++;
  }
  console.log(sum);
}
solution();
