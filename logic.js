let count = 0;
for (let i = 500; i < 5432; i++) {
  if (
    i
      .toString()
      .split('')
      .every((c) => c === '5' || c === '4' || c === '3' || c === '42')
  )
    count++;
}

console.log(count);
