document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div') //selects all div within the grid.
    const resultDisplay = document.querySelector('#result') //selects results div so we can updte it later.
    let width = 15 //lets js know that the game is 15 divs wide.
    let currentShooterIndex = 202 //starts in shooter in div 202
    let currentInvaderIndex = 0//starts invaders in div 0
    let alienInvadersTakenDown = [] //starts as empty array 
    let result = 0 
    let direction = 1
    let invaderId

    //define the alien invaders by placing them in an array 
     const alienInvaders = [
         0, 1, 2, 3, ,4 ,5 ,6 ,7, 8, 9,
         15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
         30, 31, 32, 33, 34, 35, 36, 37, 38, 39
     ]
     // draw space invaders into grid.

    alienInvaders.forEach(invader => squares[currentInvaderIndex + invader].classList.add('invader')) 

     //draw shooter 
     squares[currentShooterIndex].classList.add('shooter')

     //move the shooter along the line but not up and down 
     function moveShooter(e){
         //first we have to remove the shooter from the board i.e. div 202
         squares[currentShooterIndex].classList.remove('shooter')
         switch(e.keyCode){
             case 37:
                 // i.e if currentShooterIndex = 45. 45%15=0, therefore it can not move left. 
                 // if index = 76. 76%15 = 1, therefore it can move left. 
                 //this is because the width of the board is 15 so if there is not remainder it means it is far left of the board
                 if (currentShooterIndex % width !== 0) currentShooterIndex -= 1
                 break
            case 39:
                //if you divide the index by 15 and the answer is less than 14 you are able to move right 
                // i.e if index = 30. 30%15 = 0 which is less than 14, therefore you can move right 
                if (currentShooterIndex % width < width -1) currentShooterIndex += 1
                break
         }
         squares[currentShooterIndex].classList.add('shooter')
     }

     document.addEventListener('keydown', moveShooter)

     //move invaders on a time loop and move a row down each time.
     function moveInvaders(){
        const leftEdge = alienInvaders[0] % width === 0
        const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width -1

        if((leftEdge && direction === -1) || (rightEdge && direction === 1)){
            direction = width
        } else if (direction === width){
            if(leftEdge) direction = 1
            else direction = -1
        }
        for(let i = 0; i <= alienInvaders.length -1; i++){
            alienInvaders[i] += direction
        }
        for(let i = 0; i <= alienInvaders.length -1; i++){
            squares[alienInvaders[i]].classList.add('invader')
        }

    //decide if game is over 
    
    }

})