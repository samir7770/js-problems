reverse = (str) => {
  str = str.split(" ");
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
};
reverse("Hello JavaScript");
