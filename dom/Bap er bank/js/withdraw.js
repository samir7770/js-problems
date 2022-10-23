// Withdraw JS Start

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmountString = document.getElementById("withdraw").value;
  const withdrawAmount = parseFloat(withdrawAmountString);

  const withdrawBoxString = document.getElementById("withdrawBox").innerText;
  const withdrawBox = parseFloat(withdrawBoxString);

  const balanceString = document.getElementById("balance").innerText;
  const balanceAmount = parseFloat(balanceString);

  document.getElementById("withdrawBox").innerText =
    withdrawBox + withdrawAmount;

  document.getElementById("balance").innerText = balanceAmount - withdrawAmount;
  document.getElementById("withdraw").value = "";
});

// Withdraw JS End
