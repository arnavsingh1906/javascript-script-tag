
const inputField = document.getElementById("textInput");
const outputParagraph = document.getElementById("output");

inputField.addEventListener("keypress", function(event) {

  const key = event.key;

  outputParagraph.textContent = `You pressed: ${key}`;
});
