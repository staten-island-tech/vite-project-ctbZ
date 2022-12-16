import { switches } from  "..js/array";
import { DOM } from "..js/DOM";
import "..styles/header.css";
import "..styles/cards.css";

switches.forEach((switches) =>
  DOM.MenuPage.insertAdjacentHTML(
    "beforeend",
    `
<div class="cards">
<img class="IMG" src="${switches.IMG}"><img>
<h1 class="CardName">${switches.Name}</h1>
<h2 class="CardPrice">$${switches.Price}</h2>
</div>
`
));