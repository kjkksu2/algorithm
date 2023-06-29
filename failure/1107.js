let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

// https://www.acmicpc.net/board/view/31853
function checkDigit(num, broken) {
  const str = String(num);

  for (let i = 0; i < str.length; i++) {
    if (broken[Number(str[i])]) {
      return false;
    }
  }
  return true;
}

function solution() {
  const target = +input[0];
  const errorNum = +input[1];
  let min = Infinity;

  // 현재 위치가 100이다.
  if (target === 100) {
    console.log(0);
    return;
  }

  // 현재 위치가 100이므로 100에서부터 +/-로 도달하는 경우
  const operationPush = Math.abs(target - 100);
  min = Math.min(min, operationPush);

  // 고장난 버튼이 없는 경우
  if (errorNum === 0) {
    min = Math.min(min, String(target).length);
    console.log(min);
    return;
  }

  // 고장난 버튼이 있는 경우, 고장난 버튼 저장
  const errors = input[input.length - 1].split(" ").map(Number);
  const broken = Array.from({ length: 10 }, () => 0);
  for (let i = 0; i < errors.length; i++) {
    broken[errors[i]] = 1;
  }

  /*
    1. 0부터 999999까지 전부 누른다.
    2. 누른 후에 target까지 몇 번 +/- 눌러야 하는지 구한다.
    3. 가장 적게 누른 것을 출력한다.
  */
  for (let i = 0; i <= 999999; i++) {
    if (checkDigit(i, broken)) {
      const numPush = String(i).length;
      const operationPush = Math.abs(target - i);
      const count = numPush + operationPush;
      min = Math.min(min, count);
    }
  }

  console.log(min);
}
solution();
