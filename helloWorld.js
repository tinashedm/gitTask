//hello world program modified to accept and display input from user
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
     
readline.question("What is your favourite colour? ", colour => {
  console.log(`You like the colour ${colour}!`);
  readline.close();
});