let canvas = document.getElementById('snake')
let context = canvas.getContext('2d')
let box = 32
let snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right"
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
}

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

function drawFood(){
    context.fillStyle = 'red'
    context.fillRect(food.x, food.y, box, box)
}

document.addEventListener('keydown', update)
function update(event){
    if(event.keyCode == 37 && direction != "right"){
        direction = "left"
    }else if(event.keyCode == 38 && direction != "up"){
        direction = "down"
    }else if(event.keyCode == 39 && direction != "left"){
        direction = "right"
    }else if(event.keyCode == 40 && direction != "down"){
        direction = "up"
    }
}

function iniciarJogo(){
    if(snake[0].x > 15 * box && direction == "right"){
        snake[0].x = 0
    }else if(snake[0].x < 0 && direction == "left"){
        snake[0].x = 16 * box
    }else if(snake[0].y > 15 * box && direction == "up"){
        snake[0].y = 0
    }else if(snake[0].y < 0 && direction == "down"){
        snake[0].y = 16 * box
    }

    criarBG()
    criarCobrinha()
    drawFood()

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

