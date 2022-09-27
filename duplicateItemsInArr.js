let a = [1, 2, 3, 4, 3, 4, 2];

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] == a[j]) {
      console.log(a[j]);
    }
  }
}
