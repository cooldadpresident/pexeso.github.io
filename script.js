let list = [
  "Nejkrasnejsi",
  "Nejkrasnejsi",
  "Kouzelna",
  "Kouzelna",
  "Bobicek",
  "Bobicek",
  "Bobinka",
  "Bobinka",
  "Zlaticko",
  "Zlaticko",
  "Milacek",
  "Milacek",
];

let match = "";
let click = 0;
let count = 0;

// check if the user won
function check() {
  if (count === 6) window.alert("Jupijou skore je: " + click);
}

// shuffle the list

function shuffleList(List) {
  for (let i = list.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = List[i];
    List[i] = List[j];
    List[j] = temp;
  }
  return List;
}
list = shuffleList(list);

// toggle function to handle moves
let toggle = (text) => {
  click = click + 1;
  document.getElementById("count").innerText = "Celkem tahu: " + click;

  // toggle class and update text visibility   

  text.classList.toggle("active");
  if (text.style.display === "block") {
    text.style.display == "none";
    match = "";
  } else if (text.style.display == "none") {
    text.style.display === "block";
    if (match === "") match = text;
    else if (match.innerText === text.innerText) {
      text.style.display = "inline";
      match.style.display = "inline";
      // match has been found
      count++;
      match = "";

      // check and display result with .5 sec delay
      setTimeout(() => check(), 500);
    } else {
      // revert back changes if no match
      // found with delay
      setTimeout(() => {
        text.style.display = "none";
        match.style.display = "none";
        match = "";
      }, 500);
    }
  }
};

// create cards

function createCard(e) {
  const cardItem = document.createElement("div");
  cardItem.classList.add("card-item");
  const text = document.createElement("p");
  text.innerText = e;
  text.style.display = "none";
  cardItem.appendChild(text);
  text.style.display = "none";
  cardItem.addEventListener("click", () => toggle(text));
  const card = document.getElementById("card");
  card.appendChild(cardItem);
}

// load all the cards

list.map((e, i) => createCard(e, i));
