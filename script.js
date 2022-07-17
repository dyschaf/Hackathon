// There are for suits
let suits = ["♠", "♡", "♢", "♣"];
// there are 13 cards
let ranks = [
  { card: "2" },
  { card: "3" },
  { card: "4" },
  { card: "5" },
  { card: "6" },
  { card: "7" },
  { card: "8" },
  { card: "9" },
  { card: "10" },
  { card: "J" },
  { card: "Q" },
  { card: "K" },
  { card: "A" },
];
// this will hold all my cards right befor shuffling
let deck = [];

// this is making my card
function nameCards() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      let cards = ranks[j].card + suits[i];
      deck.push({ card: cards, value: j, img: `cardImg/${cards}.png` });
    }
  }
}
let newgamebtn;
nameCards();

// shuffling deck
function shuffle() {
  deck.sort((a, b) => 0.5 - Math.random());
  console.log(deck[5].value);
}

shuffle(deck);

let player1;
let player2;
// splitting the deck
function splitTheDeck() {
  let half = Math.ceil(deck.length / 2);
  player1 = deck.splice(0, half);
  player2 = deck.splice(-half);
  console.log(player1);
  console.log(player2);
}
splitTheDeck(deck);

// --------------------
// use const if the value is constant
// ---------------

let player1Btn = document.getElementById("btn1");
let player2Btn = document.getElementById("btn2");
// let player1Flip=document.getElementById()
let player1Card = document.getElementById("faceUp1");
let player2Card = document.getElementById("faceUp2");
player1Btn.addEventListener("click", war);
player2Btn.addEventListener("click", war);
let div = document.querySelector("#tieContainer");
// function button(){
//     player1Btn=document.getElementById('btn1')
//     player2Btn=document.getElementById('btn2')
//     war()
// }
// function drop(e) {
//   war();
// }
// dropbox.ondragover = function drag(e) {
//   e.preventDefault();
// };
// function drag() {
//   war();
// }
// function allowDrop(event) {
//   event.preventDefault();
// }

// console.log(player1[0].img);
// document.querySelector("#faceUp1").addEventListener("dragover", war());
function war() {
  document.querySelector("#cardleft2").style.border = "white solid 2px";
  document.querySelector("#cardleft1").style.border = "white solid 2px";
  cardchecker();
  gameover();

  player1Btn.disabled = false;
  player2Btn.disabled = false;
  player1Card.style.backgroundImage = `URL(${player1[0].img})`;
  player2Card.style.backgroundImage = `URL(${player2[0].img})`;
  roundWinner();
}


// ----------------
// the if/else is repetitive
// you could call another function inside the statment instead of repeating the code
// -------------------------

function roundWinner() {
  if (player1[0].value > player2[0].value) {
    console.log("player1");
    player1.push(player1[0]);
    player1.push(player2[0]);
    player2.shift();
    player1.shift();
    console.log(player2);
    console.log(player1);
  } else if (player1[0].value < player2[0].value) {
    // I would want to ignollage player2 won this round
    // console.log(player2)
    player2.push(player2[0]);
    player2.push(player1[0]);
    player2.shift();
    player1.shift();
    console.log(player2);
    console.log(player1);
  } else if ((player1[0].value = player2[0].value)) {
    if ((div = true)) {
      //   closetieContainer();
      tieContainer();
    }
  } else {
    tieContainer();
  }
}
console.log(player2);
console.log(player1);
let body = document.body;

// ------------------
// You could do an OR inside the if condition to avoid if/else
// -----------------

function gameover() {
  if (player1.length === 52) {
    console.log("player1 winner");
    player1Btn.disabled = true;
    player2Btn.disabled = true;
    gameoverdivplayer1();
  } else if (player2.length === 52) {
    console.log("player2 winner");
    player1Btn.disabled = true;
    player2Btn.disabled = true;
    gameoverdivplayer2();
  } else {
  }
}

// --------------------
// You should use a loop to create the div
// ----------------------

// --------------------
// The code is hard to read from here
// Try to refactor it with loops and functions
// we could have a talk about it
// -------------------

// tiecontainer
function tieContainer() {
  player1Btn.disabled = true;
  player2Btn.disabled = true;
  let div = document.createElement("div");
  let button = document.createElement("button");
  let player1div = document.createElement("div");
  let player2div = document.createElement("div");
  let player1card1 = document.createElement("div");
  let player1card2 = document.createElement("div");
  let player1card3 = document.createElement("div");
  let player1card4 = document.createElement("div");
  let player1card5 = document.createElement("div");
  let player2card1 = document.createElement("div");
  let player2card2 = document.createElement("div");
  let player2card3 = document.createElement("div");
  let player2card4 = document.createElement("div");
  let player2card5 = document.createElement("div");
  //   let div4 = document.createElement("div");
  let body = document.body;
  console.log(body);
  div = body.appendChild(div);
  player1div = div.appendChild(player1div);
  player2div = div.appendChild(player2div);

  //   pushing my divs to html for player 1

  player1card1 = player1div.appendChild(player1card1);
  player1card2 = player1div.appendChild(player1card2);
  player1card3 = player1div.appendChild(player1card3);
  player1card4 = player1div.appendChild(player1card4);
  player1card5 = player1div.appendChild(player1card5);

  //   pushing my divs to html for player 2

  player2card1 = player2div.appendChild(player2card1);
  player2card2 = player2div.appendChild(player2card2);
  player2card3 = player2div.appendChild(player2card3);
  player2card4 = player2div.appendChild(player2card4);
  player2card5 = player2div.appendChild(player2card5);

  //    = document.createElement("div")
  div.setAttribute("id", "tieContainer");
  //   button.setAttribute("id", "donebtn");

  player1div.setAttribute("id", "player1tie");
  player2div.setAttribute("id", "player2tie");
  player1card1.setAttribute("id", "player1card1");
  player1card2.setAttribute("id", "player1card2");
  player1card3.setAttribute("id", "player1card3");
  player1card4.setAttribute("id", "player1card4");
  player1card5.setAttribute("id", "player1card5");
  player2card1.setAttribute("id", "player2card1");
  player2card2.setAttribute("id", "player2card2");
  player2card3.setAttribute("id", "player2card3");
  player2card4.setAttribute("id", "player2card4");
  player2card5.setAttribute("id", "player2card5");
  cardsleft();
}

// --------------------
// too repetitive
// ---------------------



//if they have less then 5 cards
function cardsleft() {
  if (player1.length >= 5 && player2.length >= 5) {
    fivefive();
  } else if (player1.length == 4) {
    player1four();
  } else if (player2.length == 4) {
    player2four();
  } else if (player1.length == 3) {
    player1three();
  } else if (player1.length == 3) {
    player1three();
  } else if (player2.length == 2) {
    player2two();
  } else if (player1.length == 2) {
    player1two();
  } else if (player2.length == 1) {
    player2one();
  } else if (player1.length == 1) {
    player1one();
  } else {
    // gameover();
  }
}
//more then 5 card left
function fivefive() {
  player1card1.style.backgroundImage = `URL(${player1[0].img})`;
  player2card1.style.backgroundImage = `URL(${player2[0].img})`;
  player1card5.style.backgroundImage = `URL(${player1[4].img})`;
  player2card5.style.backgroundImage = `URL(${player2[4].img})`;
  tiewinner();
}
//player2 has 4 cards left
function player2four() {
  player1card1.style.backgroundImage = `URL(${player1[0].img})`;
  player2card1.style.backgroundImage = `URL(${player2[0].img})`;
  player1card5.style.backgroundImage = `URL(${player1[4].img})`;
  player2card5.style.backgroundImage = `URL(${player2[3].img})`;
  if (player1[4].value > player2[3].value) {
    player1wins();
    player1wins();
    player1wins();
    player1wins();
    cardchecker();
    gameover();
    gameoverdivplayer1();
    console.log("player 1 winner");
  } else if (player1[4].value < player2[3].value) {
    player2wins();
    player2wins();
    player2wins();
    player2wins();
    player2.push(player1[0]);
    player1.shift();
    cardchecker();
    setTimeout(closetieContainer, 5000);
  }
}
//player1 has 4 cards left
function player1four() {
  player1card1.style.backgroundImage = `URL(${player1[0].img})`;
  player2card1.style.backgroundImage = `URL(${player2[0].img})`;
  player1card5.style.backgroundImage = `URL(${player1[3].img})`;
  player2card5.style.backgroundImage = `URL(${player2[4].img})`;
  if (player1[3].value > player2[4].value) {
    cardchecker();
    player1wins();
    player1wins();
    player1wins();
    player1wins();
    player1.push(player2[0]);
    player2.shift();
    cardchecker();
    setTimeout(closetieContainer, 5000);
  } else if (player1[3].value < player2[4].value) {
    player2wins();
    player2wins();
    player2wins();
    player2wins();
    cardchecker();
    gameover();
    gameoverdivplayer2();
    console.log("player 2 winner");
  }
}
//player2 has 4 cards left
function player1three() {
  player1card1.style.backgroundImage = `URL(${player1[0].img})`;
  player2card1.style.backgroundImage = `URL(${player2[0].img})`;
  player1card5.style.backgroundImage = `URL(${player1[2].img})`;
  player2card5.style.backgroundImage = `URL(${player2[4].img})`;
  if (player1[2].value > player2[4].value) {
    player1wins();
    player1wins();
    player1wins();
    player1.push(player2[0]);
    player2.shift();
    player1.push(player2[0]);
    player2.shift();
    cardchecker();
    setTimeout(closetieContainer, 5000);
  } else if (player1[2].value < player2[4].value) {
    player2wins();
    player2wins();
    player2wins();
    cardchecker();
    gameover();
    gameoverdivplayer2();
    console.log("player 2 winner");
  }
}
//player2 has 3 cards left
function player2three() {
  player1card1.style.backgroundImage = `URL(${player1[0].img})`;
  player2card1.style.backgroundImage = `URL(${player2[0].img})`;
  player1card5.style.backgroundImage = `URL(${player1[4].img})`;
  player2card5.style.backgroundImage = `URL(${player2[2].img})`;
  if (player1[4].value > player2[2].value) {
    player1wins();
    player1wins();
    player1wins();
    gameover();
    cardchecker();
    console.log("player 1 winner");
    gameoverdivplayer1();
  } else if (player1[4].value < player2[2].value) {
    player2wins();
    player2wins();
    player2wins();
    player2.push(player1[0]);
    player1.shift();
    player2.push(player1[0]);
    player1.shift();
    cardchecker();
    setTimeout(closetieContainer, 5000);
  }
}

//player1 has 2 cards left
function player1two() {
  player1card1.style.backgroundImage = `URL(${player1[0].img})`;
  player2card1.style.backgroundImage = `URL(${player2[0].img})`;
  player1card5.style.backgroundImage = `URL(${player1[1].img})`;
  player2card5.style.backgroundImage = `URL(${player2[4].img})`;
  if (player1[1].value > player2[4].value) {
    player1wins();
    player1wins();
    player1.push(player2[0]);
    player2.shift();
    player1.push(player2[0]);
    player2.shift();
    player1.push(player2[0]);
    player2.shift();
    cardchecker();
    setTimeout(closetieContainer, 5000);
  } else if (player1[1].value < player2[4].value) {
    player2wins();
    player2wins();
    console.log("player 2 winner");
    gameover();
    cardchecker();
    gameoverdivplayer2();
  }
}
//player2 has 2 cards left
function player2two() {
  player1card1.style.backgroundImage = `URL(${player1[0].img})`;
  player2card1.style.backgroundImage = `URL(${player2[0].img})`;
  player1card5.style.backgroundImage = `URL(${player1[4].img})`;
  player2card5.style.backgroundImage = `URL(${player2[1].img})`;
  if (player1[4].value > player2[1].value) {
    player1wins();
    cardchecker();
    player1wins();
    console.log("player 1 winner");
    gameoverdivplayer1();
    gameover();
  } else if (player1[4].value < player2[1].value) {
    player2wins();
    player2wins();
    player2.push(player1[0]);
    player1.shift();
    player2.push(player1[0]);
    player1.shift();
    player2.push(player1[0]);
    player1.shift();
    cardchecker();
    setTimeout(closetieContainer, 5000);
  }
}
//player1 has 1 cards left
function player1one() {
  player1card1.style.backgroundImage = `URL(${player1[0].img})`;
  player2card1.style.backgroundImage = `URL(${player2[0].img})`;
  player1card5.style.backgroundImage = `URL(${player1[0].img})`;
  player2card5.style.backgroundImage = `URL(${player2[4].img})`;
  if (player1[0].value > player2[4].value) {
    player1wins();
    player1.push(player2[0]);
    player2.shift();
    player1.push(player2[0]);
    player2.shift();
    player1.push(player2[0]);
    player2.shift();
    player1.push(player2[0]);
    player2.shift();
    cardchecker();
    setTimeout(closetieContainer, 5000);
  } else if (player1[0].value < player2[4].value) {
    player2wins();
    console.log("player 2 winner");
    cardchecker();
    gameoverdivplayer2();
    gameover();
  }
}
//player2 has 1 cards left
function player2one() {
  player1card1.style.backgroundImage = `URL(${player1[0].img})`;
  player2card1.style.backgroundImage = `URL(${player2[0].img})`;
  player1card5.style.backgroundImage = `URL(${player1[4].img})`;
  player2card5.style.backgroundImage = `URL(${player2[0].img})`;
  if (player1[4].value > player2[0].value) {
    player1wins();
    console.log("player 2 winner");
    cardchecker();
    gameoverdivplayer1();
    gameover();
    setTimeout(closetieContainer, 5000);
  } else if (player1[4].value < player2[0].value) {
    player2wins();
    player2.push(player1[0]);
    player1.shift();
    player2.push(player1[0]);
    player1.shift();
    player2.push(player1[0]);
    player1.shift();
    player2.push(player1[0]);
    player1.shift();
    cardchecker();
    setTimeout(closetieContainer, 6000);
  }
}
//second tie container
function tietieContainer() {
  player1Btn.disabled = true;
  player2Btn.disabled = true;
  let div = document.createElement("div");
  let button = document.createElement("button");
  let player1div = document.createElement("div");
  let player2div = document.createElement("div");
  let player1card1 = document.createElement("div");
  let player1card2 = document.createElement("div");
  let player1card3 = document.createElement("div");
  let player1card4 = document.createElement("div");
  let player1card5 = document.createElement("div");
  let player2card1 = document.createElement("div");
  let player2card2 = document.createElement("div");
  let player2card3 = document.createElement("div");
  let player2card4 = document.createElement("div");
  let player2card5 = document.createElement("div");
  //   let div4 = document.createElement("div");
  let body = document.body;
  console.log(body);
  //   button = div.appendChild(button);
  //   button.textContent = "Done";
  div = body.appendChild(div);
  player1div = div.appendChild(player1div);
  player2div = div.appendChild(player2div);
  //   pushing my divs to html for player 1
  player1card1 = player1div.appendChild(player1card1);
  player1card2 = player1div.appendChild(player1card2);
  player1card3 = player1div.appendChild(player1card3);
  player1card4 = player1div.appendChild(player1card4);
  player1card5 = player1div.appendChild(player1card5);
  //   pushing my divs to html for player 2
  player2card1 = player2div.appendChild(player2card1);
  player2card2 = player2div.appendChild(player2card2);
  player2card3 = player2div.appendChild(player2card3);
  player2card4 = player2div.appendChild(player2card4);
  player2card5 = player2div.appendChild(player2card5);
  div.setAttribute("id", "tieContainer");
  button.setAttribute("id", "donebtn");
  player1div.setAttribute("id", "player1tie");
  player2div.setAttribute("id", "player2tie");
  player1card1.setAttribute("id", "player1card1");
  player1card2.setAttribute("id", "player1card2");
  player1card3.setAttribute("id", "player1card3");
  player1card4.setAttribute("id", "player1card4");
  player1card5.setAttribute("id", "player1card5");
  player2card1.setAttribute("id", "player2card1");
  player2card2.setAttribute("id", "player2card2");
  player2card3.setAttribute("id", "player2card3");
  player2card4.setAttribute("id", "player2card4");
  player2card5.setAttribute("id", "player2card5");
  tietiefivefive();
}
//only made it workif you have 10 or more card to much code for this one project
// tie in tie winner
function tietiefivefive() {
  player1card1.style.backgroundImage = `URL(${player1[4].img})`;
  player2card1.style.backgroundImage = `URL(${player2[4].img})`;
  player1card5.style.backgroundImage = `URL(${player1[8].img})`;
  player2card5.style.backgroundImage = `URL(${player2[8].img})`;
  if (player1[9].value > player2[9].value) {
    player1wins();
    player1wins();
    player1wins();
    player1wins();
    player1wins();
    player1wins();
    player1wins();
    player1wins();
    player1wins();
    setTimeout(cardbackgroundupdateplayer1wins, 2000);
    console.log(player2);
    console.log(player1);
    cardchecker();
    setTimeout(closetieContainer, 3000);
    setTimeout(closetieContainer, 3000);
  } else if (player1[9].value < player2[9].value) {
    player2wins();
    player2wins();
    player2wins();
    player2wins();
    player2wins();
    player2wins();
    player2wins();
    player2wins();
    player2wins();

    setTimeout(cardbackgroundupdateplayer2wins, 2000);
    // setTimeout(player2wins, 2000);
    console.log(player2);
    console.log(player1);
    cardchecker();
    setTimeout(closetieContainer, 3000);
    setTimeout(closetieContainer, 3000);
  } else {
    console.log("will make this a tie");
  }
}
//use this once between tie contaners
function cardbackgroundupdate() {
  player1Card.style.backgroundImage = `URL(${player1[0].img})`;
  player1card2.style.backgroundImage = `URL(${player1[1].img})`;
  player1card3.style.backgroundImage = `URL(${player1[2].img})`;
  player1card4.style.backgroundImage = `URL(${player1[3].img})`;
  player2Card.style.backgroundImage = `URL(${player2[0].img})`;
  player2card2.style.backgroundImage = `URL(${player2[1].img})`;
  player2card3.style.backgroundImage = `URL(${player2[2].img})`;
  player2card4.style.backgroundImage = `URL(${player2[3].img})`;
  cardchecker();
}
//card background update player 1 wins
function cardbackgroundupdateplayer1wins() {
  player1Card.style.backgroundImage = `URL(${player1[0].img})`;
  player1card2.style.backgroundImage = `URL(${player1[1].img})`;
  player1card3.style.backgroundImage = `URL(${player1[2].img})`;
  player1card4.style.backgroundImage = `URL(${player1[3].img})`;
  player2Card.style.backgroundImage = `URL(${player2[0].img})`;
  player2card2.style.backgroundImage = `URL(${player2[1].img})`;
  player2card3.style.backgroundImage = `URL(${player2[2].img})`;
  player2card4.style.backgroundImage = `URL(${player2[3].img})`;
  player1wins();
  cardchecker();
  console.log(player1);
  console.log(player2);
} //card background update player 2 wins
function cardbackgroundupdateplayer2wins() {
  player1Card.style.backgroundImage = `URL(${player1[0].img})`;
  player1card2.style.backgroundImage = `URL(${player1[1].img})`;
  player1card3.style.backgroundImage = `URL(${player1[2].img})`;
  player1card4.style.backgroundImage = `URL(${player1[3].img})`;
  player2Card.style.backgroundImage = `URL(${player2[0].img})`;
  player2card2.style.backgroundImage = `URL(${player2[1].img})`;
  player2card3.style.backgroundImage = `URL(${player2[2].img})`;
  player2card4.style.backgroundImage = `URL(${player2[3].img})`;
  player2wins();
  cardchecker();
  console.log(player1);
  console.log(player2);
}
//display cards left
function cardchecker() {
  document.querySelector("#cardleft1").textContent = player1.length + " left";
  document.querySelector("#cardleft2").textContent = player2.length + " left";
  console.log(player1.length);
}
// whowon the 1st tie
function tiewinner() {
  if (player1[4].value > player2[4].value) {
    player1wins();
    player1wins();
    player1wins();
    player1wins();
    setTimeout(cardbackgroundupdateplayer1wins, 2000);
    console.log(player2);
    console.log(player1);
    setTimeout(closetieContainer, 5000);
  } else if (player1[4].value < player2[4].value) {
    player2wins();
    player2wins();
    player2wins();
    player2wins();
    setTimeout(cardbackgroundupdateplayer2wins, 2000);
    console.log(player2);
    console.log(player1);
    setTimeout(closetieContainer, 6000);
  } else if ((player1[4].value = player2[4].value)) {
    setTimeout(cardbackgroundupdate, 2000);
    setTimeout(closetieContainer, 6000);
    setTimeout(tietieContainer, 6000);
  }
}
// push and shift the card properly once if player 1 wins
function player1wins() {
  player1.push(player1[0]);
  player1.push(player2[0]);
  player2.shift();
  player1.shift();
}
// push and shift the card properly once if player 2 wins
function player2wins() {
  player2.push(player1[0]);
  player2.push(player2[0]);
  player2.shift();
  player1.shift();
}
// remove my tie container
function closetieContainer() {
  document.querySelector("#tieContainer").remove();
  player1Btn.disabled = false;
  player2Btn.disabled = false;
}
// player one wins ask player new game?
function gameoverdivplayer1() {
  player1Btn.disabled = true;
  player2Btn.disabled = true;
  gameoverplayerwins = document.createElement("div");
  h1 = document.createElement("h1");
  newgamebtn = document.createElement("button");
  gameoverplayerwins = body.appendChild(gameoverplayerwins);
  gameoverplayerwins.appendChild(h1);
  gameoverplayerwins.appendChild(newgamebtn);
  newgamebtn.setAttribute("id", "newgamebtn");
  gameoverplayerwins.setAttribute("id", "gameoverplayerwins");
  h1.setAttribute("id", "h1");
  h1.textContent = "player 1 is the winner";
  newgamebtn.textContent = "New Game";
  gameoverplayerwins.style.backgroundColor = "blue";
  document.querySelector("#newgamebtn").addEventListener("click", closenewgame);
  newgamebtn.addEventListener("click", closenewgame);
  document.getElementById("newgamebtn").addEventListener("click", closenewgame);
}
// player two wins ask player new game?
function gameoverdivplayer2() {
  player1Btn.disabled = true;
  player2Btn.disabled = true;
  let gameoverplayerwins = document.createElement("div");
  let h1 = document.createElement("h1");
  let newgamebtn = document.createElement("button");
  gameoverplayerwins = document.body.appendChild(gameoverplayerwins);
  gameoverplayerwins.appendChild(h1);
  gameoverplayerwins.appendChild(newgamebtn);
  newgamebtn.setAttribute("id", "newgamebtn");
  gameoverplayerwins.setAttribute("id", "gameoverplayerwins");
  h1.setAttribute("id", "h1");
  h1.textContent = "player 2 is the winner";
  newgamebtn.textContent = "New Game";
  gameoverplayerwins.style.backgroundColor = "red";
  document.querySelector("#newgamebtn").addEventListener("click", closenewgame);
  document.getElementById("newgamebtn").addEventListener("click", closenewgame);
  newgamebtn.addEventListener("click", closenewgame);
}
// the trigger for new game by button
function closenewgame() {
  document.querySelector("#gameoverplayerwins").remove();
  nameCards();
  shuffle(deck);
  splitTheDeck(deck);
  war();
}
