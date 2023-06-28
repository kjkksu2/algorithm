let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

function solution() {
  input = input.slice(0, -1).map(Number);

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

  const ans = [];
  for (let i = 0; i < input.length; i++) {
    const number = input[i];
    let findFlag = false;

    for (let j = 2; j <= number; j++) {
      if (eratos[j] && eratos[number - j]) {
        findFlag = true;
        ans.push(`${number} = ${j} + ${number - j}`);
        break;
      }
    }

    if (!findFlag) {
      ans.push("Goldbach's conjecture is wrong.");
    }
  }

  console.log(ans.join("\n"));
}
solution();
