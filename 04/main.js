let total = 0;
let evenTotal = 0;
let oddTotal = 0;
let divBy2Total = 0;
let divBy3Total = 0;
let divTotal = 0;

for (let i = 1; i <= 100; i++) {
    total += i;

    if (i % 2 === 0) {
        evenTotal += i;
        divBy2Total += (i**2);
    }

    if (i % 2 === 1) {
        oddTotal += i;
    }

    if (i % 3 === 0) {
        divBy3Total += (i**2);
    }

}

divTotal = divBy2Total - divBy3Total;

console.log(total);
console.log(evenTotal);
console.log(oddTotal);
console.log(divTotal);