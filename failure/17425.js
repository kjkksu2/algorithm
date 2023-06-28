let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

function solution() {
  input = input.map(Number);
  const [count, ...arr] = input;

  const eratos = Array.from({ length: 1000005 }, () => 0);
  for (let i = 1; i <= 1000005; i++) {
    for (let j = i; j <= 1000005; j += i) {
      eratos[j] += i;
    }
  }

  const g = Array.from({ length: 1000005 }, () => 0);
  g[1] = eratos[1];
  for (let i = 1; i <= 1000005; i++) {
    g[i + 1] = g[i] + eratos[i + 1];
  }

  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(g[arr[i]]);
  }
  console.log(ans.join("\n"));
}
solution();
