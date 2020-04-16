var submitBtn = document.querySelector("#submitBtn");
var inputText = document.querySelector("#inputText");
var textBox = document.querySelector("#textBox");
var textValue;

submitBtn.addEventListener("click", () => {
  textValue = inputText.value;
  console.log(textValue);
  inputText.value = "";
});

//better way

var betterSubmit = document.querySelector("#betterSubmit");
var betterText = document.querySelector("#betterText");

var count = 0;

betterSubmit.addEventListener("click", (e) => {
  // console.log(betterText.value)
  e.preventDefault();

  var h1 = document.createElement("h1");

  h1.setAttribute("data", count);
  count++;

  var text = document.createTextNode(betterText.value);

  h1.appendChild(text);

  textBox.appendChild(h1);
});
