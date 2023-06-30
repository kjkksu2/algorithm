let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

input = +input.join("");

let digit = 1;
let powerOfTen;
let sum = 0;
while (true) {
  powerOfTen = 10 ** digit;
  if (input < powerOfTen) {
    if (powerOfTen === 10) {
      sum += digit * input;
    } else {
      sum += digit * (input - 10 ** (digit - 1) + 1);
    }
    break;
  } else {
    if (powerOfTen === 10) {
      sum += 9;
    } else {
      sum += digit * (powerOfTen - 10 ** (digit - 1));
    }
    digit++;
  }
}

console.log(sum);
