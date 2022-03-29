let inputNum = +prompt('input a number between 1 and 99');

let guessNum;
let count = 0;

do {
    guessNum = +prompt("guess your friend's number");
    count++;

    if (guessNum < inputNum) {
        alert('higher!');
    } else if (guessNum > inputNum) {
        alert('lower!');
    } else if (guessNum === inputNum) {
        alert('correct, you took ' + count + ' tries!');
    }
} while (guessNum !== inputNum);