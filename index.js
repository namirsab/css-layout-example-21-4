import { createCardComponent } from "./lib/card.js";
import { getCards } from "./lib/db.js";

// Render cards coming from data
const cardComponents = [];
getCards().forEach((cardData) => {
  const cardComponent = createCardComponent(cardData);
  cardComponents.push(cardComponent);
});

// Append them to the content element
const contentElement = document.querySelector(".content");
cardComponents.forEach((cardComponent) => {
  contentElement.append(cardComponent);
});
