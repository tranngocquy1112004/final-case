
class Paddle{
    constructor(canvas){
        this.canvas = canvas;
        this.width = 150;
        this.height =  20;
        this.x = 250;
        this.y = 620;
        this.speed = 30;
    }
    display(){
        let ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath()
    }
}
