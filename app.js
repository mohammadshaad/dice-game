let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1);
console.log(randomNumber2);

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

switch (randomNumber1) {
  case 1:
    img1.setAttribute("src", "images/dice1.png");
    break;
  case 2:
    img1.setAttribute("src", "images/dice2.png");
    break;
  case 3:
    img1.setAttribute("src", "images/dice3.png");
    break;
  case 4:
    img1.setAttribute("src", "images/dice4.png");
    break;
  case 5:
    img1.setAttribute("src", "images/dice5.png");
    break;
  case 6:
    img1.setAttribute("src", "images/dice6.png");
    break;
  default:
    console.log(randomNumber1);
}

switch (randomNumber2) {
  case 1:
    img2.setAttribute("src", "images/dice1.png");
    break;
  case 2:
    img2.setAttribute("src", "images/dice2.png");
    break;
  case 3:
    img2.setAttribute("src", "images/dice3.png");
    break;
  case 4:
    img2.setAttribute("src", "images/dice4.png");
    break;
  case 5:
    img2.setAttribute("src", "images/dice5.png");
    break;
  case 6:
    img2.setAttribute("src", "images/dice6.png");
    break;
  default:
    console.log(randomNumber2);
}
