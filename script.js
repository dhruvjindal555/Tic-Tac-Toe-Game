console.log("Welcome to the game")
let audioElement = new Audio('music.mp3')
let tapAudio = new Audio('ting.mp3')
let boxes = Array.from(document.getElementsByClassName('boxes'))
let turnForX = document.getElementById('turnForX')
let turnFor0 = document.getElementById('turnFor0')
let gif = document.getElementsByClassName("gif")
let btn = document.getElementById('button')
let turn = "X"
let startMusic = document.getElementById('startButton')
// audioElement.muted = true
tapAudio.volume = 0.5;
audioElement.volume = 0.3;
// tapAudio.play();
const changeTurn = () => {
    return turn == "X" ? "0" : "X"
}
const checkWin = () => {

    let boxText = document.getElementsByClassName('boxText')
    wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, , 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135],
    ]

    wins.forEach((e) => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.getElementById(boxText[e[0]].innerText).innerText = "You Won"
            console.log('Won')
            document.getElementById("gif" + boxText[e[0]].innerText).style.opacity = "1"
            // document.querySelector(".line").style.background-color = "white";
            // if (window.matchMedia("max-width:900px")) {
            //     document.body.style.backgroundColor = "yellow"
            //     // document.querySelector(".line").style.width = "30vw";
            // } else {
            //     document.body.style.backgroundColor = "pink"
            // }
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "30vw";
            turnForX.style.opacity = '0';
            turnFor0.style.opacity = '0';
        }
    })
}


startMusic.addEventListener('click', () => {

    audioElement.play();
})
boxes.forEach((element) => {
    let boxText = element.getElementsByClassName('boxText')[0]
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            // audioElement.play();
            boxText.innerText = turn;
            turn = changeTurn()
            tapAudio.play()
            if (turn === "X") {
                turnFor0.style.opacity = '0';
                turnForX.style.opacity = '1';
            } else {
                turnForX.style.opacity = '0';
                turnFor0.style.opacity = '1';
            }
            checkWin();

        }
    })
})

button.addEventListener('click', () => {
    turnForX.style.opacity = '1';
    turn = "X"
    // gif.style.opacity = "0";
    // document.getElementsByClassName("won").innerText = ""
    let boxText = Array.from(document.getElementsByClassName('boxText'))
    boxText.forEach((element) => {
        element.innerText = ""
    })
    let gif = Array.from(document.getElementsByClassName('gif'))
    gif.forEach((element) => {
        element.style.opacity = "0";
    })
    let won = Array.from(document.getElementsByClassName('won'))
    won.forEach((element) => {
        element.innerText = ""
    })
    document.querySelector(".line").style.width = "0vw"

})

