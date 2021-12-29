var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'green',
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

dino.draw();

class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }

    draw() {
        ctx.fillStyle = 'red',
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

var timer = 0;
var catusArray = [];
var 점프타이머 = 0;
var amimation;

function moveDino() {
    amimation = requestAnimationFrame(moveDino);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(timer % 120 === 0) {
        var cactus = new Cactus();
        catusArray.push(cactus);
    }

    catusArray.forEach((e, i, o) => {
        //x 좌표가 0미만이면 제거
        if(e.x < 0) {
            o.splice(i, 1)
        }
        e.x--;

        충돌하냐(dino, e);
        e.draw();
    });

    if(점프중) {
        dino.y--;
        점프타이머++;
    }
    if(!점프중) {
        if(dino.y < 200) {
            dino.y++;
        }
    }
    if(점프타이머 > 100) {
        점프중 = false;
        점프타이머 = 0;
    }
    
    dino.draw();
};

moveDino();



function 충돌하냐(dino, cactus) {
    var x축차이 = cactus.x - (dino.x + dino.width);
    var y축차이 = cactus.y - (dino.y + dino.height);
    if(x축차이 < 0 && y축차이< 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(amimation);
    }
}





var 점프중 = false;


document.addEventListener('keydown', function(e) {
    if(e.code === 'Space') {
        점프중 = true;
    }
});