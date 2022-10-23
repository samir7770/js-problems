document.getElementById("deposit-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const inputAmount = getInputValue("deposit");
  const currentDeposit = getTextValue("depositBox");
  const currentBalance = getTextValue("balance");
  const newAmonnt = inputAmount + currentDeposit;
  const newBalance = inputAmount + currentBalance;

  setValue("depositBox", newAmonnt);
  setValue("balance", newBalance);
});

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const inputAmount = getInputValue("withdraw");
  const currentWithdraw = getTextValue("withdrawBox");
  const currentBalance = getTextValue("balance");
  const newAmonnt = inputAmount + currentWithdraw;
  const newBalance = currentBalance - inputAmount;

  setValue("withdrawBox", newAmonnt);
  setValue("balance", newBalance);
});
