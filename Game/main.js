let canvas = document.getElementById("game");
let ball = new Ball(canvas);
let paddle = new Paddle(canvas);
let bricks = [];
let isGameOver = false;
let isGameWin = false;
        function main(){
            if(!isGameOver){
            clearSceen()
            showBricks()
            paddle.display(canvas)
            ball.display(canvas)
            diChuyenbong()
            ballChampaddle()
            checkCollision();
            requestAnimationFrame(main);

            if(ball.y > canvas.height - 15){
                isGameOver = true
            }
            }else {
                alert('Game Over!!')
            }
        }
        main()
        function clearSceen(){
            let ctx = canvas.getContext("2d")
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        function createBricks() {
            let col = canvas.width / (BRICK_WIDTH + SPACE_BIRCK);
            let row = 3;
            // let MaxScore = col * row;
            for (let i = 0; i < col; i++) {
                for (let j = 0; j < row; j++) {
                    let brick = new Brick(canvas);
                    brick.x = i * (BRICK_WIDTH + SPACE_BIRCK);
                    brick.y = j * (BRICK_HEIGHT + SPACE_BIRCK);
                    bricks.push(brick);
                }      
            }
        }
        createBricks();
        function showBricks() {
            for (let i = 0; i < bricks.length; i++) {
                bricks[i].display();
            }
        }
        function checkCrash(obj1, obj2) {
            let left1 = obj1.x - obj1.radius;
            let right1 = obj1.x + obj1.radius;
            let top1 = obj1.y - obj1.radius;
            let bot1 = obj1.y + obj1.radius;

            let left2 = obj2.x;
            let right2 = obj2.x + obj2.width;
            let top2 = obj2.y;
            let bot2 = obj2.y + obj2.height;
        
            if (left1 > right2 || right1 < left2 || top1 > bot2 || bot1 < top2) {
                return false;
            }
            return true;
        }
         function checkCollision() {
         for (let i = 0; i < bricks.length; i++) {
         if (checkCrash(ball, bricks[i])) {
            if(bricks[i].y + bricks[i].height < ball.y){
                 ball.dy = -ball.dy;
           }else{
               ball.dx = -ball.dx;
        }
             bricks.splice(i, 1);               
            break;
         }
             }
        }
        window.addEventListener("keydown", function (event) {
            if(event.keyCode == 37){
                paddle.x -= paddle.speed
            }
            if(event.keyCode == 39){
                paddle.x += paddle.speed
            }
            if(paddle.x < 0){ paddle.x = 0; }
            else if(paddle.x > canvas.width - paddle.width) { paddle.x = canvas.width - paddle.width}
            // Căn không cho paddle ra ngoài biên
        })
        function diChuyenbong(){ 
            if(ball.x < 15 || ball.x > canvas.width - 15){ 
                ball.dx = -ball.dx;
            }
            if(ball.y < 15){
                ball.dy = -ball.dy;
            }
        ball.x += ball.dx;
        ball.y += ball.dy;
        }
        function ballChampaddle(){
            if (
                ball.y + ball.dy >= paddle.y  &&
                ball.x + ball.dx >= paddle.x &&           
                ball.x + ball.dx <= paddle.x + paddle.width           
              ) {           
                ball.dy = -ball.dy;           
              }
        }