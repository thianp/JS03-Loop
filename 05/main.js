let savings = 100000;

for (let i = 0; i < 10; i++) {
    savings = (savings * 1.025).toFixed(2);
    console.log(savings);
}