import { addCard } from "./lib/db.js";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = form.title.value;
  const items = form.tags.value.split(",");

  // shorthand for object properties
  const cardData = {
    title,
    items,
  };

  console.log(cardData);

  addCard(cardData);

  form.reset();
});
