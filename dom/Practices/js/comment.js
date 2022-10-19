const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function () {
  const input = document.getElementById("comment-box");

  const newP = document.createElement("p");
  newP.innerText = input.value;
  const container = document.getElementById("container");
  container.appendChild(newP);
  input.value = "";
});
