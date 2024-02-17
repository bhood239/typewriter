const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  const char = sentence[i];
  let time = i * 50;
  setTimeout(() => {process.stdout.write(char)}, time);
} 

setTimeout(() => {process.stdout.write('\n')}, sentence.length * 50);