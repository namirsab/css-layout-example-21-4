/*
Shape of the cardData parameter
{
  title: "Movies",
  items: [
    "The Lord of the Rings",
    "The Matrix",
    "Blade Runner",
    "Tenet",
    "Joker",
  ],
},

This function returns an HTMLElement representing
the card
*/

export function createCardComponent(cardData) {
  // Create section
  const section = createSection();

  // heading
  const headingElement = createHeading(cardData);

  // interest-items list
  const interestItemsListElement = createInterestItemsList(cardData);

  section.append(headingElement);
  section.append(interestItemsListElement);

  return section;
}

function createSection() {
  const section = document.createElement("section");
  section.classList.add("card");
  return section;
}

function createHeading(cardData) {
  const headingElement = document.createElement("h2");
  headingElement.textContent = cardData.title;
  return headingElement;
}

function createInterestItemsList(cardData) {
  const interestItemsListElement = document.createElement("ul");
  interestItemsListElement.classList.add("interest-items");

  const listItemElements = cardData.items.map((itemText) => {
    const liElement = document.createElement("li");
    liElement.textContent = itemText;
    return liElement;
  });

  listItemElements.forEach((listItemElement) => {
    interestItemsListElement.append(listItemElement);
  });

  return interestItemsListElement;
}

/*
<section class="card">
  <h2>{title}</h2>
  <ul class="interest-items">
    <li>The Lord of the Rings</li>
    <li>The Matrix</li>
    <li>Blade Runner</li>
    <li>Tenet</li>
    <li>Joker</li>
  </ul>
</section>
*/
