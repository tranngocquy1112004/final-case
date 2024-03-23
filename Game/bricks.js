class Brick{
    constructor(canvas){
        this.canvas = canvas;
        this.x = 10;
        this.y = 10;
        this.width = BRICK_WIDTH;
        this.height = BRICK_HEIGHT;
        this.color = "yellow";
    }
    display(){
        let ctx = this.canvas.getContext('2d');
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.closePath();
    }
}