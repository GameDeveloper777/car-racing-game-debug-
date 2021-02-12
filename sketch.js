var database;
var playerCount;
var allPlayers;
var gameState=0;
var game;
var player;
var form;
var car1, car2, car3, car4;
var allCars
var car1Img,car2Img,car3Img,car4Img
var trackImg


function preload(){
    car1Img=loadImage("images/car1.png");
    car2Img=loadImage("images/car2.png");
    car3Img=loadImage("images/car3.png");
    car4Img=loadImage("images/car4.png");
    trackImg=loadImage("images/track.jpg");

}


function setup(){
    createCanvas(displayWidth,displayHeight);
    database=firebase.database()
    game=new Game();
    game.getGameState();
    console.log("gameState"+gameState);
    game.start();

}

function draw(){
    background("white");
   
    if(playerCount===4){
        game.updatingGameState(1);
    }
    if(gameState===1){
        game.play();
    }
    
}
