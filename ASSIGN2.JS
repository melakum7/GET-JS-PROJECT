const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

function askNumber() {
  rl.question('Enter an integer or "q" to quit: ', function (input) {
    if (input.toLowerCase() === 'q') {
      console.log('Exiting...');
      rl.close();
      checkConditions();
    } else {
      let num = parseInt(input);
      if (isNaN(num)) {
        console.log('Please enter a valid integer or "q" to quit.');
        askNumber();
      } else {
        numbers.push(num);
        console.log('You entered:', num);
        askNumber();
      }
    }
  });
}

function checkConditions() {
  let found = false;
  numbers.forEach((num1, index1) => {
    numbers.forEach((num2, index2) => {
      if (index1 !== index2) {
        let product = num1 * num2;
        if (numbers.includes(product)) {
          console.log(`Condition met: ${num1} x ${num2} = ${product}`);
          found = true;
        }
      }
    });
  });
  if (!found) console.log('Condition not met');
}

askNumber();
