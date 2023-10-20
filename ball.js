var createRandom = function(){
    // random x and y
    var width = window.innerWidth;
    var height = window.innerHeight;
    var x = Math.floor(Math.random()*width);
    var y = Math.floor(Math.random()*height);
    if (x>(width-50)) x = width - 50;
    if (y>(height-50)) y = height - 50;

    // random color
    var r = Math.floor(255*(Math.random()));
    var g = Math.floor(255*(Math.random()));
    var b = Math.floor(255*(Math.random()));        
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';

    // set div attributes
    var div = document.createElement('div');
    div.id = 'ball';
    div.style.zIndex = '1';
    div.style.position = 'absolute';    
    div.style.left = x + 'px';    
    div.style.top = y + 'px';    
    div.style.width = '10px';    
    div.style.height = '10px';    
    div.style.borderRadius = '50%';
    div.style.background = color;    

    // Then append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(div);

    // default start position
    div.x = x;
    div.y = y;
    return div;        
};

var moveBalls = function (balls){
    let inx = 0;
    while(inx < balls.length){
        moveBall(balls[inx]);
        inx = inx + 1;
    }
}

var moveBall = function(ball){
    move(ball, ball.xVel, ball.yVel);

    var width = window.innerWidth;
    var height = window.innerHeight;

    if(ball.x<=0 || ball.x >= width){
        ball.xVel = -ball.xVel;
    }
    if(ball.y<=0 || ball.y >=  height){
        ball.yVel = -ball.yVel;
    }

    
}

var loadBalls = function(numberOfBalls){
    var balls = [];

    let inx = 0;
    while(inx <= numberOfBalls){
        let cBall = createRandom();
        // customize
        cBall.id = "ball" + inx;
        cBall.xVel = Math.floor(Math.random()*15);
        cBall.yVel = Math.floor(Math.random()*15);

        balls.push(cBall);
        inx++;
    }
    return balls;
}



var create = function(x,y,color){
    // set div attributes
    var div = document.createElement('div');
    div.id = 'ball';
    div.style.zIndex = '1';
    div.style.position = 'absolute';    
    div.style.left = x + 'px';    
    div.style.top = y + 'px';    
    div.style.width = '15px';    
    div.style.height = '15px';    
    div.style.borderRadius = '50%';
    div.style.background = color;    

    // Then append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(div);

    return div;        
};

var size = function(div, width, height){
    div.style.width = width + 'px';    
    div.style.height = height + 'px';    
};

var color = function(div, r, g, b){
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    div.style.background = color; 
};

var zIndex = function(div, zIndex){
    div.style.zIndex = zIndex.toString(); 
};

var colorRandom = function(div){

    var counter = 0;
    var limit = 3;

    var timerColor = function(div, x, y){
        if(counter >= limit) return;
        counter += 1;

        setTimeout(function(){
            // random color
            var r = Math.floor(255*(Math.random()));
            var g = Math.floor(255*(Math.random()));
            var b = Math.floor(255*(Math.random()));        
            var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
            div.style.background = color; 
            timerColor(div);
        },500);
    };
    timerColor(div);
};


var move = function(div, x, y){

    // add x coordinate
    div.x = div.x + x;
    div.style.left = div.x + 'px';

    // add y coordinate
    div.y = div.y + y;
    div.style.top = div.y + 'px';                  
};

var repeatMove = function(div, x, y, limit){
    var counter = 0;

    var timerMove = function(div, x, y){
        if(counter >= limit) return;
        counter += 1;

        setTimeout(function(){
            move(div,x,y);
            timerMove(div,x,y);
        },1000);
    };
    timerMove(div,x,y);
};


