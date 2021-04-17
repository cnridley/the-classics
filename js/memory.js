//JAVASCRIPT FOR MEMORY GAME
// JS for match the card game! all Js is in this event listener. 
document.addEventListener('DOMContentLoaded', () => {
    // array of cards with each card as an object. Two of each as they need to be in pairs
    const cardArray = [
        {
            name: 'Aus',
            img: '../memoryGame/images/Australia.png',
        },
        {
            name: 'Aus',
            img: '../memoryGame/images/Australia.png',
        },
        {
            name: 'Brazil',
            img: '../memoryGame/images/Brazil.png',
        },
        {
            name: 'Brazil',
            img: '../memoryGame/images/Brazil.png',
        },
        {
            name: 'Canada',
            img: '../memoryGame/images/Canada.png',
        },
        {
            name: 'Canada',
            img: '../memoryGame/images/Canada.png',
        },
        {
            name: 'Finland',
            img: '../memoryGame/images/Finland.png',
        },
        {
            name: 'Finland',
            img: '../memoryGame/images/Finland.png',
        },
        {
            name: 'France',
            img: '../memoryGame/images/France.png',
        },
        {
            name: 'France',
            img: '../memoryGame/images/France.png',
        },
        {
            name: 'Ireland',
            img: '../memoryGame/images/Ireland.png',
        },
        {
            name: 'Ireland',
            img: '../memoryGame/images/Ireland.png',
        },
        {
            name: 'Jamaica',
            img: '../memoryGame/images/Jamaica.png',
        },
        {
            name: 'Jamaica',
            img: '../memoryGame/images/Jamaica.png',
        },
        {
            name: 'United-Kingdom',
            img: '../memoryGame/images/United-Kingdom.png',
        },
        {
            name: 'United-Kingdom',
            img: '../memoryGame/images/United-Kingdom.png',
        },
        {
            name: 'United-States',
            img: '../memoryGame/images/United-States.png',
        },
        {
            name: 'United-States',
            img: '../memoryGame/images/United-States.png',
        },
        {
            name: 'Wales',
            img: '../memoryGame/images/Wales.png',
        },
        {
            name: 'Wales',
            img: '../memoryGame/images/Wales.png',
        },
    ]


 cardArray.sort(() => 0.5 - Math.random()) //displays cards in differnt order on every ro-load

//get grid element and append cardsarray onto it.
const grid = document.querySelector('.grid')
const displayResult = document.querySelector('#result')
var cardsChosen = [] //empty array to store which cards were clicked on .
var cardsChosenId = []
var cardsWon = [] //cards will be push into this array when matched so they are removed from the game.
let result = 0 
// appends images onto the grid and creates the board game you see.
function createBoard(){
    //use a for loop to loop through cardArray and for each card creat an image element called card.
    // each card set an attriute link to link it to world image as that is the back of the card.
    for (let i=0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', '../memoryGame/images/iconfinder_world_51942.png')
        //give each card element a data-id and loop over it
        card.setAttribute('data-id', i)
        //add event listener so when cards are clicked on the 'flipCard function is invoked
        card.addEventListener('click', flipCard)
        // append all the image cards onto the grid.
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) { //if the two images are the same set it to the smiley face image.
      cards[optionOneId].setAttribute('src', '../memoryGame/images/smiley.jpeg')
      cards[optionTwoId].setAttribute('src', '../memoryGame/images/smiley.jpeg')
      alert("You have clicked the same image!")
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', '../memoryGame/images/smiley.jpeg')
      cards[optionTwoId].setAttribute('src', '../memoryGame/images/smiley.jpeg')
      cards[optionOneId].removeEventListener('click', flipCard) //remove event listener from image it can not be clicked again.
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen) //removes card from the game
    } else { //if two images are not the same flip set to the world image. 
      cards[optionOneId].setAttribute('src', '../memoryGame/images/iconfinder_world_51942.png')
      cards[optionTwoId].setAttribute('src', '../memoryGame/images/iconfinder_world_51942.png')
      result = result + 1
      
    }
    cardsChosen = [] //empties cardschosen array for next round
    cardsChosenId = [] //empties cardschosenId array for next round
    //displayResult.textContent = cardsWon.length
    displayResult.textContent = result 
    if  (cardsWon.length === cardArray.length/2) {
      displayResult.textContent = "Congratulations! Your score is " + result
    }
  }

// flip card function.
function flipCard(){
    //get the attribute created in function avbove and set it to cardId variable.
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name) //will push the name of the cardArry into the cardsChosen array.
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img) //sets the image to the flag picked, img taken from the cardAry img.
    // only want two cards at a time in the cardChosen array
    if(cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}
//call the createboard function so that the cards so on HTML.
 createBoard()
})