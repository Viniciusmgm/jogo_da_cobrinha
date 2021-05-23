let canvas = document.getElementById('snake')
let context = canvas.getContext('2d')
let box = 32
let snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right"

function criarBG(){
    context.fillStyle = 'lightgreen'
    context.fillRect(0, 0, 16 * box, 16 * box)
}

function criarCobrinha(){
    for(cont = 0; cont < snake.length; cont++){
        context.fillStyle = 'green'
        context.fillRect(snake[cont].x, snake[cont].y, box, box)
    }
}

function iniciarJogo(){
    criarBG()
    criarCobrinha()

    let snakeX = snake[0].x
    let snakeY = snake[0].y
    if(direction == "right"){
        snakeX += box
    }else if(direction == "left"){
        snakeX -= box
    }else if(direction == "up"){
        snakeY += box
    }else if(direction == "down"){
        snakeY -= box
    }

    snake.pop()
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead)

}

let jogo = setInterval(iniciarJogo, 100)

