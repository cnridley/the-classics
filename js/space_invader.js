document.addEventListener('DOMContentLoader', () => {
    const squares = document.querySelectorAll('.grid div') //selects all div within the grid.
    const resultDisplay = document.querySelector('#result') //selects results div so we can updte it later.
    let width = 15 //lets js know that the game is 15 divs wide.
    let currentShooterIndex = 202 //starts in shooter in div 202
    let currentInvaderIndex = 0 //starts invaders in div 0
    let alienInvadersTakenDown = [] //starts as empty array 
    let result = 0 
    let direction = 1
    let invaderId

    //define the alien invaders by placing them in an array 
     const alienInvaders = [
         1, 2, 3, ,4 ,5 ,6 ,7, 8, 9,
         15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
         30, 31, 32, 34, 35, 36, 37, 38, 39
     ]
     // draw space invaders into grid.

    alienInvaders.forEach(invader => squares[currentInvaderIndexcurrent + invader].classList.add('invader')) 


})