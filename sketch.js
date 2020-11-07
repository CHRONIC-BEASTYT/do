var form,player,game
var database,position;
var gameState=0;
var playerCount=0;
var canvas;
var car1,car2,car3,car4,cars;
var allPlayers;
function setup(){
canvas=createCanvas(displayWidth,displayHeight);

   database = firebase.database();
  game=new Game();
  game.getState();
  game.start()
}

function draw(){
    background("white");
    
    drawSprites();
    if(playerCount === 4){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
}









