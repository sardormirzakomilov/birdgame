var cvs = document.getElementById('canvas')
var asdasds = document.querySelector('.asdasds');
var ctx = cvs.getContext('2d')
var bird = new Image()
var trub1 = new Image()
var trub2 = new Image()
var bg = new Image()
var fg = new Image()

bird.src = 'img/bird.png'
trub1.src = 'img/trub1.png'
trub2.src = 'img/trub2.png'
bg.src = 'img/bg.png'
fg.src = 'img/down.png'
var gap = 90
var pipe = []
pipe[0] = {
    x: cvs.width,
    y: 0
}

document.addEventListener('keydown', moveUp);

function moveUp() {
    yPos -= 35
}

var xPos = 10
var yPos = 150
var grav = 1.5

function draw() {
    ctx.drawImage(bg, 0, 0)
    for (let i = 0; i < pipe.length; i++) {
        ctx.drawImage(trub1, pipe[i].x, pipe[i].y)
        ctx.drawImage(trub2, pipe[i].x, pipe[i].y + trub1.height + gap)

        pipe[i].x--;

        if (pipe[i].x == 100) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * trub1.height) - trub1.height
            })
        }
        if (xPos + bird.width >= pipe[i].x &&
            xPos <= pipe[i].x + trub1.width &&
            (yPos <= pipe[i].y + trub1.height ||
                yPos + bird.height >= pipe[i].y + trub1.height +
                gap) || yPos + bird.height >= cvs.height - fg.height) {
            location.reload()
        }


    }
    ctx.drawImage(fg, 0, cvs.height - fg.height)
    ctx.drawImage(bird, xPos, yPos)
    yPos += grav

    requestAnimationFrame(draw)

}


trub2.onload = draw