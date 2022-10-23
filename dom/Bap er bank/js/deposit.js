// Deposit JS Start

document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositAmountString = document.getElementById("deposit").value;
  const depositAmount = parseFloat(depositAmountString);

  const currentDepositString = document.getElementById("depositBox").innerText;
  const currentDeposit = parseFloat(currentDepositString);

  const balanceString = document.getElementById("balance").innerText;
  const balanceAmount = parseFloat(balanceString);

  document.getElementById("depositBox").innerText =
    depositAmount + currentDeposit;

  document.getElementById("balance").innerText = balanceAmount + depositAmount;

  document.getElementById("deposit").value = "";
});

// Deposit JS End
