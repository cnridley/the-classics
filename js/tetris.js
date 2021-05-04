document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const width = 10 
    const height = 20 
    let currentPosition = 4 

    //the tetrominoes
    //drawers outs the four shapes in tetris with all their rotations. 
    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
      ]
    
      const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
      ]
    
      const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
      ]
    
      const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
      ]
    
      const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
      ]

      const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

      //randomly selects the tetrominoes 
      let random = Math.floor(Math.random()*theTetrominoes.length)
      let currentRotation = 0 
      let current = theTetrominoes[random][currentRotation]

      //draw the shape
      function draw() {
          current.forEach( index => {
              squares[currentPosition + index].classList.add('block')
          })
      }

      //undraw the shape 
      function unDraw() {
        current.forEach( index => {
            squares[currentPosition + index].classList.remove('block')
        })
    }

    //move down function 
    function moveDown() {
        unDraw()
        currentPosition = currentPosition += width
        draw()
        freeze()
    }

    //move left and avoid collisions
    function moveRight() {
        unDraw()
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)
        if(!isAtRightEdge) currentPosition += 1
        if(current.some(index => squares[currentPosition + index].classList.contains('block2'))){
            currentPosition -= 1
        }
        draw()
    }

    function moveLeft() {
        unDraw()
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
        if(!isAtLefttEdge) currentPosition -= 1
        if(current.some(index => squares[currentPosition + index].classList.contains('block2'))){
            currentPosition += 1
        }
        draw()
    }

    //rotate tetromino

})