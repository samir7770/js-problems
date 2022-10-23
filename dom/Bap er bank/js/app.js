document.getElementById("submit-btn").addEventListener("click", function () {
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  if (emailValue === "samir@gmail.com" && passwordValue === "samir") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid User");
  }
});
