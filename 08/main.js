let input;
let total = 0;
let count = 0;
let avg;

do {

  input = +prompt("input a number");
  console.log(input);

  if (input !== 0 &&
    Math.sign(input) !== -1 && // input > 0
    input !== "" &&
    input !== null &&
    Number.isNaN(input) === false) {
    total += input;
    count++; 
  }
} while (input !== 0 &&
    Math.sign(input) !== -1 &&
    input !== "" &&
    input !== null &&
    Number.isNaN(input) === false);

avg = total / count;

console.log(total);
console.log(avg);