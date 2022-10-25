const sentence = "hello there from lighthouse labs";
let counter = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, counter);

  counter += 50;
}

setTimeout(() => {
  process.stdout.write('\n');
}, counter);