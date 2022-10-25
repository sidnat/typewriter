const sentence = "hello there from lighthouse labs";
let counter = 0;

for (const char of sentence) {
  setTimeout(() => {
    // process.stdout.write(char + '\n');
    console.log(char)
  }, counter)

  counter += 50;
}
