import { switches } from  "./array";
import { DOM } from "./DOM";
import "../styles/header.css";
import "../styles/cards.css";

switches.forEach((switches) =>
  document.getElementById("switchpage").insertAdjacentHTML(
    "beforeend",
    `<div class="cards">
    <img class="IMG" src="${switches.IMG}"><img>
    <h2 class="CardName">${switches.Name}</h2>
    <h3 class="CardPrice">$${switches.Price}</h3>
    </div>
    `
));

DOM.linear.addEventListener("click", function(){
  DOM.switchpage.innerHTML = ""
  linearpage();
})

function linearpage(){
  switches.filter((menu) => menu.Type === "Linear").forEach((menu) => DOM.switchpage
  .insertAdjacentHTML(
    "beforeend",
    `<div class="cards">
    <img class="IMG" src="${switches.IMG}"><img>
    <h2 class="CardName">${switches.Name}</h2>
    <h3 class="CardPrice">$${switches.Price}</h3>
    </div>
    `
))
}