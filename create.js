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

  let cards = JSON.parse(localStorage.getItem("cards"));
  if (cards === null) {
    cards = [];
  }
  cards.push(cardData);

  try {
    localStorage.setItem("cards", JSON.stringify(cards));
    throw new Error("An error happened");
  } catch (error) {
    console.log(error);
    alert("There was an error while saving");
  }

  form.reset();
});
