document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

    const width = 10
    let currentIndex = 0 //first div in grid
    let appleIndex = 0 //first div in grid
    let currentSnake = [2,1,0]  // 2 is the head, 1 is the body and 0 is the tail
    let direction = 1 
    let score = 0 
    let speed = 0.9
    let intervalTime = 0 
    let interval = 0 

    //to start/restart game 
    // using arrow function to make sure each index of currentSnake array is taken into cosideration, using forEach
    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')
        clearInterval(interval)
        score = 0 
        //randomApple
        //set the all variable for a new game/restart
        direction = 1 
        scoreDisplay.innerText = score
        intervalTime = 1000
        currentSnake = [2,1,0]
        currentIndex = 0 
        currentSnake.forEach(index => squares[index].classList.add('apple'))
        interval = setInterval(moveOutcomes, intervalTime)
    }

    //function that deals with all the move outcomes of the snake. 
    //deals with snake hitting wall 
    function moveOutcomes(){
        if (
            (currentSnake[0] + width >= (width * width ) && direction === width) || //hits bottom
            (currentSnake[0] % width === width - 1 && direction === 1) || // hits rights
            (currentSnake[0] % width === 0  && direction === -1) || //hits left 
            (currentSnake[0] - width < 0 && direction === -width) || //hits bottom
            squares[currentSnake[0] + direction].classList.contains('snake') //if snake goes into itself
        ) {
            return clearInterval(interval) //if any of above happens it is gamover.
        }

        const tail = currentSnake.pop() //removes last item of the snake array and shows it 
        squares[tail].classList.remove('snake') //removes class of snake from the tail
        currentSnake.unshift(currentSnake[0] + direction) //gives direction to the head of the snake

        // if snake gets apple
        if(squares[currentSnake[0]].classList.contains('apple')) {
            squares[currentSnake[0]].classList.remove('apple')
            squares[tail].classList.add('snake')
            currentSnake.push(tail)
            randomApple()
            score++
            scoreDisplay.textContent = score
            clearInterval(interval)
            intervalTime = intervalTime * speed
            interval = setInterval(moveOutcomes, intervalTime)
          }
          squares[currentSnake[0]].classList.add('snake')
    }



    



    //assign functions to keycodes.
    function control(e) {
        squares[currentIndex].classList.remove('snake') //remove all classes of snake. 

        if(e.keycode === 39){
            direction = 1 // press the right keyboard key and the snake will go right i.e down 1 in div.
        } else if (e.keycode === 38){
            direction = -width // width is asssigned to ten. snake will appear to move up a row but it is actually move 10 divs back
        } else if (e.keyCode === 37) {
            direction = -1 // if we press left, the snake will go left one div
        } else if (e.keyCode === 40) {
            direction = +width //if we press down, the snake head will instantly appear in the div ten divs from where you are now
        }
    }

    document.addEventListener('keyup', control) //invoked control fnction every time get is pressed

})