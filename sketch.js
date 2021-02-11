var canvas,edges;
var music;
var ball,o1,o2,o3,o4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    o1 = createSprite(100,525,170,80);
    o1.shapeColor = "blue";
    o2 = createSprite(300,525,170,80);
    o2.shapeColor = "yellow";
    o3 = createSprite(500,525,170,80);
    o3.shapeColor = "red";
    o4 = createSprite(700,525,170,80);
    o4.shapeColor = "green";




    //create box sprite and give velocity

    ball = createSprite(Math.round(random(20,750)),50,20,20);
    ball.shapeColor = "white";
    ball.velocityX = 5;
    ball.velocityY = 5;

    
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();

    ball.bounceOff(edges);

    





    //add condition to check if box touching surface and make it box
    if(ball.isTouching(o1) && ball.bounceOff(o1)){
        ball.shapeColor = "blue";
        music.play();
        
    }

    if(ball.isTouching(o2) && ball.bounceOff(o2)){
        ball.shapeColor = "yellow";
        ball.x = Math.round(random(20,750))
        ball.y = 50;

    }

    if(ball.isTouching(o3) && ball.bounceOff(o3)){
        ball.shapeColor = "red";
        ball.velocityX = 0;
        ball.velocityY = 0;
    }

    if(ball.isTouching(o4) && ball.bounceOff(o4)){
        ball.shapeColor = "green";
        
    }

    drawSprites();
}
