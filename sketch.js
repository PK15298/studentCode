var boy, boyImg, garden, gardenImg, stone, stoneImg, gameoverImg;
var gameOver;
var END = 0;
var PLAY = 1;
var gameState = PLAY;
var edges
function preload() {
  boyImg = loadImage("../Images/boyimg.png")
  gardenImg = loadImage("../Images/gardenimg.png")
  stoneImg = loadImage("../Images/stoneimg.png")
  // gameoverImg = loadImage("gameoverImg.png")
}

function setup() {
  createCanvas(400, 400);

  garden = createSprite(200, 200);
  garden.addImage(gardenImg);
  garden.velocityX = -15;
  garden.scale = 3;

  boy = createSprite(20, 20)
  boy.addImage(boyImg);

  stone = createSprite(20, 20)
  stone.addImage(stoneImg);
  edges = createEdgeSprites();
  
}

function draw() {
  background(0);

  if (gameState === PLAY) {


    // edges = createEdgeSprites();
    boy.collide(edges);

    if (garden.x < 0) {
      garden.x = width / 2;
    }

    if (keyDown("space")) {
      boy.velocityY = 5;
    }

  } else if (gameState === END) {
    gameOver.visible = true;
  }
  drawSprites();
}