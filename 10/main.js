for (let i = 0; i <= 100; i++) {
  let j = i - 1;

  while (j >= 1 && i % j !== 0) {
    j--;
    if (j === 1) {
      console.log(i);
    }
  }
}
