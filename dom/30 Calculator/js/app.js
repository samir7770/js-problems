document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  const input = document.getElementById("inputField");
  const inputText = input.value;
  const inputValue = parseFloat(inputText);
  const percentege = (30 * inputValue) / 100;
});
