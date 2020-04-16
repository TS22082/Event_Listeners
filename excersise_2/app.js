var toggleBtn = document.querySelector("#toggleBtn");
var toggleDisplay = document.querySelector("#toggleDisplay");

var toggleStatus;

toggleBtn.addEventListener("click", () => {
  toggleStatus = toggleDisplay.getAttribute("class");

  if (toggleStatus === "toggle toggleTrue") {
    toggleDisplay.setAttribute("class", "toggle toggleFalse");
    document.body.setAttribute("class", "");
  } else {
    toggleDisplay.setAttribute("class", "toggle toggleTrue");
    document.body.setAttribute("class", "darkMode");
  }
});
