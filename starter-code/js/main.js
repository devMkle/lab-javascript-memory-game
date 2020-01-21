const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];
let pClicked = document.getElementById('pairs_clicked')
let pGuessed = document.getElementById('pairs_guessed')
const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();
window.addEventListener("load", event => {
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      // TODO: write some code here
      card.className="card turned"
      memoryGame.pickedCards.push(card)
      console.log(memoryGame.pickedCards)  
      console.log(`Card clicked: ${card}`);
      if(memoryGame.pickedCards.length==3){
        if(memoryGame.checkIfPair(memoryGame.pickedCards[0].innerHTML,memoryGame.pickedCards[1].innerHTML)){
          memoryGame.pickedCards[2].className="card"
          console.log("pareja encontrada")
          memoryGame.pickedCards = []
        }else{
          memoryGame.pickedCards[0].className="card"
          memoryGame.pickedCards[1].className="card"
          memoryGame.pickedCards[2].className="card"
          memoryGame.pickedCards = []
        }
      }
      pClicked.innerText=memoryGame.pairsClicked
      pGuessed.innerText=memoryGame.pairsGuessed
    });
  });
});

