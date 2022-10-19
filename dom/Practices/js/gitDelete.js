const deleteValidation = document.getElementById("deleteValidation");
const deleteBtn = document.getElementById("deleteBtn");
deleteValidation.addEventListener("keyup", function (event) {
  const inputText = event.target.value;
  if (inputText.toLowerCase() === "delete") {
    deleteBtn.removeAttribute("disabled");
  } else {
    deleteBtn.setAttribute("disabled");
  }
});

deleteBtn.addEventListener("click", function () {
  const deleteContent = document.getElementById("delete-content");
  deleteContent.style.display = "none";
});
