// Amount
function getTextValue(fieldId) {
  const text = document.getElementById(fieldId);
  const textString = text.innerText;
  const textValue = parseFloat(textString);
  return textValue;
}

// Input Value
function getInputValue(fieldId) {
  const input = document.getElementById(fieldId);
  const inputString = input.value;
  const inputValue = parseFloat(inputString);
  input.value = "";
  return inputValue;
}

// Set Amount
function setValue(fieldId, value) {
  const text = document.getElementById(fieldId);
  text.innerText = value;
}
