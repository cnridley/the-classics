const square = document.querySelectorAll('.square')
const mole1 = document.querySelectorAll('.mole1')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score') // use a let as it will change throughout the game.
const start = document.querySelector('#start')

let result = 0
let currentTime = timeLeft.textContent
// with any grid based game always remove any classname from div. I.e. remove mole1 from each div.

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole1')
    })
    //find a random position in the square const.Use math floor so that the number is always round down to either
    //one or 9 
    let randomPosition = square[Math.floor(Math.random() * 9 )] 

    //add the mole to the randome position 
    randomPosition.classList.add('mole1')

     //assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition){
            result = result + 1 //if the id of square is the same as the hit Position it means we have won.
            score.textContent = result //displays result in the score span.
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 500) //set interval on so that the randomsquare function is called every second.
}

moveMole()


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0){
        clearInterval(timerId)
        alert('Time is up! Your final score is '+ result)
    }
}



let timerId = setInterval(countDown, 1000)

