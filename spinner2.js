const arr = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let countTime = 100;
let countIndex = 0;

for (const char of arr) {
  countTime += 200;
  setTimeout(() => {
    countIndex += 1;
    countIndex === arr.length
      ? console.log(char)
      : process.stdout.write(char + "    \r");
  }, countTime);
}
