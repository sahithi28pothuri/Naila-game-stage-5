var form;
var gameState= 0;
var database;
var score = 0;
var seconds = 0;
var flag = false;
var startButton;
var playerCount;
var player

function preload(){
  back_img = loadImage("images/image main shinchan.jpg")
}
function setup() {
  createCanvas(1250,590);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState();
  // startButton = createButton('Start')
  // startButton.position(500,500)
  // startButton.mouseClicked(updategame)
}

function draw() {
 if(playerCount===1){
    game.update(1)
 }

 if(gameState===1){
  game.play()
 }
  
}

