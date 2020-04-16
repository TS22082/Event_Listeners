var container = document.querySelector(".container");
var clearBtn = document.querySelector("#clearBtn");
var addBtn = document.querySelector("#addBtn");

var stuff = [];
counter = 0;

addBtn.addEventListener("click", () => {
  stuff.push(`<h1>${counter}</h1>`);
  counter++;
  container.innerHTML = stuff.join(" ");
});

clearBtn.addEventListener("click", () => {
  container.innerHTML = "";

  counter = 0;
  stuff = [];
});
