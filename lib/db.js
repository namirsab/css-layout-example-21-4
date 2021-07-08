export function getCards() {
  let cards = JSON.parse(localStorage.getItem("cards"));
  if (cards === null) {
    cards = [];
  }

  return cards;
}

export function addCard(cardData) {
  const cards = getCards();
  cards.push(cardData);

  try {
    localStorage.setItem("cards", JSON.stringify(cards));
  } catch (error) {
    console.log(error);
    alert("There was an error while saving");
  }
}
