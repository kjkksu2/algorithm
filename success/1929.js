let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

function solution() {
  const [num1, num2] = input.join("").split(" ").map(Number);

  const eratos = Array.from({ length: 1000010 });
  eratos[1] = 0;
  for (let i = 2; i <= 1000010; i++) {
    if (eratos[i] === undefined) {
      eratos[i] = 1;
    }
    for (let j = i + i; j <= 1000010; j += i) {
      eratos[j] = 0;
    }
  }

  for (let i = num1; i <= num2; i++) {
    if (eratos[i]) console.log(i);
  }
}
solution();
