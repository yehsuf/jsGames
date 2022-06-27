"using strict";

const board = document.getElementById("gameBoard");
const scoreBox = document.getElementById("score")
let points = 0;
let level = 2000;
let box;
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

    let boxer = board.getElementsByClassName("gamePiece")
    for (const b of boxer) {
        box = b;
        runaway();
    }
    

}

function getClick(div) {
    clearInterval(intervalID);
    if (div.classList.contains("redPiece")) {
        points += 5;
        level += 10
    } else {
        points -= 2;
        level -= 20;
    }
    console.log(level);
    scoreBox.innerText = points;
    setBoard();
    intervalID = setInterval(()=>{
        points -= 1;
        scoreBox.innerText = points;
        setBoard()
    },level)
}

function clickHandler(ev){
    if(ev.target.classList.contains("gamePiece")){
        getClick(ev.target)
    }
}

setInterval(()=>{
    level--;
},1000)

board.addEventListener("click", clickHandler)

function runaway() {
    const width = board.clientWidth - 60;
    const x = Math.random() * width;
    const height = board.clientHeight - 60;
    const y = Math.random() * height;
    Velocity(box, 'jello', { duration: 500 });
    Velocity(box, { left: x, top: y }, { duration: 500 });
    // box.style.left = x + 'px';
    // box.style.top = y + 'px';
}

// function runaway() {
//     const width = document.body.clientWidth - 100;
//     const x = Math.random() * width;
//     const height = document.body.clientHeight - 100;
//     const y = Math.random() * height;
//     Velocity(box, 'jello', { duration: 500 });
//     Velocity(box, { left: x, top: y }, { duration: 500 });
//     // box.style.left = x + 'px';
//     // box.style.top = y + 'px';
// }




