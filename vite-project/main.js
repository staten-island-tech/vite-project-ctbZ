import { switches } from "./array";
import { DOM } from "./DOM";
import "./styles/styles.css";

switches.forEach((switches) =>
  document.getElementById("switchpage").insertAdjacentHTML(
    "beforeend",
    `<div class="cards">
    <img class="IMG" src="${switches.IMG}"><img>
    <h2 class="CardName">${switches.Name}</h2>
    <h3 class="CardPrice">$${switches.Price}</h3>
    </div>
    `
  )
);

DOM.linear.addEventListener("click", function () {
  DOM.switchpage.innerHTML = "";
  linearpage();
});

function linearpage() {
  switches
    .filter((s) => s.Type === "Linear")
    .forEach((ls) =>
      DOM.switchpage.insertAdjacentHTML(
        "beforeend",
        `<div class="cards">
    <img class="IMG" src="${ls.IMG}"><img>
    <h2 class="CardName">${ls.Name}</h2>
    <h3 class="CardPrice">$${ls.Price}</h3>
    </div>
    `
      )
    );
}
DOM.tactile.addEventListener("click", function () {
  DOM.switchpage.innerHTML = "";
  tactilepage();
});

function tactilepage() {
  switches
    .filter((s) => s.Type === "Tactile")
    .forEach((ts) =>
      DOM.switchpage.insertAdjacentHTML(
        "beforeend",
        `<div class="cards">
    <img class="IMG" src="${ts.IMG}"><img>
    <h2 class="CardName">${ts.Name}</h2>
    <h3 class="CardPrice">$${ts.Price}</h3>
    </div>
    `
      )
    );
}

DOM.clicky.addEventListener("click", function () {
  DOM.switchpage.innerHTML = "";
  clickypage();
});

function clickypage() {
  switches
    .filter((s) => s.Type === "Clicky")
    .forEach((cs) =>
      DOM.switchpage.insertAdjacentHTML(
        "beforeend",
        `<div class="cards">
    <img class="IMG" src="${cs.IMG}"><img>
    <h2 class="CardName">${cs.Name}</h2>
    <h3 class="CardPrice">$${cs.Price}</h3>
    </div>
    `
      )
    );
}
DOM.all.addEventListener("click", function () {
  DOM.switchpage.innerHTML = "";
  allpage();
});

function allpage() {
  switches.forEach((switches) =>
    document.getElementById("switchpage").insertAdjacentHTML(
      "beforeend",
      `<div class="cards">
    <img class="IMG" src="${switches.IMG}"><img>
    <h2 class="CardName">${switches.Name}</h2>
    <h3 class="CardPrice">$${switches.Price}</h3>
    </div>
    `
    )
  );
}
DOM.light.addEventListener("click", function () {
  if (DOM.body.classList.contains("dark")) {
    DOM.body.classList.add("light");
    DOM.body.classList.remove("dark");
  } else {
    DOM.body.classList.add("light");
    DOM.body.classList.remove("dark");
  }
});

DOM.dark.addEventListener("click", function () {
  if (DOM.body.classList.contains("light")) {
    DOM.body.classList.add("dark");
    DOM.body.classList.remove("light");
  } else {
    DOM.body.classList.add("dark");
    DOM.body.classList.remove("light");
  }
});
