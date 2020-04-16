var h1Target = document.querySelector("#target");

h1Target.addEventListener("click", function () {
  console.log("Hello world");

  h1Target.setAttribute("style", "color: red");
  h1Target.setAttribute("data", [1, 2, 3]);
  h1Target.setAttribute("class", "bgBlue big");

  console.log(h1Target.getAttribute("style"));
  console.log(h1Target.getAttribute("data"));
});
