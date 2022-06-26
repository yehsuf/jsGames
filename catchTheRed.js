"using strict";

const board = document.getElementById("gameBoard");
const scoreBox = document.getElementById("score")
let points = 0;
scoreBox.innerText = points;
let intervalID;

setBoard();


function random(max, min = 0) {
    let result = Math.floor(Math.random() * (max - min)) + min;
    return result;
}

function addCard() {
    const card = document.createElement("div");
    card.classList.add("gamePiece");
    return card;
}

function setBoard() {
    board.innerHTML = "";
    let frag = document.createDocumentFragment();
    for (let index = 0; index < 8; index++) {
        frag.appendChild(addCard());
    }
    const redPlace = random(8);
    frag.childNodes[redPlace].classList.add("redPiece");
    board.appendChild(frag);
}

function getClick(div) {
    clearInterval(intervalID);
    if (div.classList.contains("redPiece")) {
        points += 5;
    } else {
        points -= 2;
    }
    scoreBox.innerText = points;
    setBoard();
    intervalID = setInterval(()=>{
        points -= 1;
        scoreBox.innerText = points;
        setBoard()
    },2000)
}

function clickHandler(ev){
    if(ev.target.classList.contains("gamePiece")){
        getClick(ev.target)
    }
}

board.addEventListener("click", clickHandler)

