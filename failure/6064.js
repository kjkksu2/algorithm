let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

// https://hagisilecoding.tistory.com/115

input = input.slice(1);

function gcd(a, b) {
  while (true) {
    const remainder = a % b;
    if (remainder === 0) return b;
    a = b;
    b = remainder;
  }
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

for (let i = 0; i < input.length; i++) {
  const [m, n, x, y] = input[i].split(" ").map(Number);

  const maxYear = lcm(m, n);
  let result = -1;
  /*
    m:10, n:12일 때, <3:1>은 13년이다. 이때 멸망해는 lcm인 60이다.
    i: 3, 13, 23, 33, 43, 53 => 이들은 모두 x:3인 값들이다.
    y가 1이 되려면 1, 13, 25, 37, 49 이어야 한다.
    이들 중에서 공통된 숫자는 13이므로 <3:1>은 13년이다.
  */
  for (let i = x; i <= maxYear; i += m) {
    let remainder = i % n;

    if (remainder === 0) {
      remainder = n;
    }

    if (remainder === y) {
      result = i;
      break;
    }
  }

  console.log(result);
}
