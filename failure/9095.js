let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

input = input.slice(1).map(Number);
const result = Array.from({ length: 15 });

result[1] = 1;
result[2] = 2;
result[3] = 4;
for (let i = 4; i <= 12; i++) {
  result[i] = result[i - 1] + result[i - 2] + result[i - 3];
}

for (let i = 0; i < input.length; i++) {
  const number = input[i];

  console.log(result[number]);
}
