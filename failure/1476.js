const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const [e, s, m] = line.split(" ").map(Number);
  let year = 1;
  while (true) {
    if (
      (year - e) % 15 === 0 &&
      (year - s) % 28 === 0 &&
      (year - m) % 19 === 0
    ) {
      console.log(year);
      return;
    }
    year++;
  }
});
