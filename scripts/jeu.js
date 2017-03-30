var player = document.querySelector('#audioPlayer');
var playerWin = document.querySelector('#audioPlayerWin');
var playerLoose = document.querySelector('#audioPlayerLoose');
//var character
let hero = document.querySelector("#square");
let heroX = 90;
let heroY = 60;
let speedSquare = 10;

//var counter
let level = 1;
let points = 0;
let life = 5;

//var 
let spaceGame = document.querySelector("#spaceGame");
let levelCounter = document.querySelector("#levelCounter");
let pointsCounter = document.querySelector("#pointsCounter");
let lifeCounter = document.querySelector("#lifeCounter");
let startImg = document.querySelector("#startImg")

// tables's position
let positionTop = new Array();
let positionLeft = new Array();
let positionRight = new Array();
let tsBlocks = new Array();

// var
let dirBlock = 15;
let speedBlock = 200;
let speedGen = 2000;

// var 
let block;
let width = 0;
let mLeft = 0;
let color = 0;
let j = 0;
let k = 0;

// function's call
startGame()

function startGame() {
  window.addEventListener(
    'keypress',
    function (e) {
      if (e.keyCode == 32) {
        startImg.style.display = ("none");
        player.play();
        init();
      }
    },
    false
  );
}

function init() {

  hero.style.left = heroX + "px";
  hero.style.top = heroY + "px";
  setInterval(
    () => {
      genBlock();
    },
    speedGen
  );

  setInterval(
    () => {
      updateCounter();
      moveBlock();
      checkPosition();
      gameOver()

    },
    speedBlock
  );
}

// generating function
function genBlock() {

  block = new Rectangle("astro" + j);
  spaceGame.appendChild(block.obj);

  tsBlocks.push(block.obj);

  positionTop.push(parseInt(block.obj.style.top));
  positionLeft.push(mLeft);
  positionRight.push(mLeft + width);

  j++;

}
//moving function
function moveBlock() {
  for (let i = 0; i < positionTop.length; i++) {
    positionTop[i] = positionTop[i] - dirBlock;
    tsBlocks[i].style.top = (positionTop[i] + "px");
    tsBlocks[i].style.marginTop = (50 + "px");
  }
}
//checking positions generated block
function checkPosition() {
  if (positionTop[0] < -50) {
    positionTop.shift();
    positionLeft.shift();
    positionRight.shift();
    tsBlocks.shift();

    let x = document.querySelector("#astro" + k);
    x.remove(x);

    k++;
  }
  if (positionTop[0] === -40) {
    console.log(positionTop[0], " block ");
    checkCollision(0);
  }
}
// counters's function
function updateCounter() {
  levelCounter.innerHTML = ("Level " + level);
  pointsCounter.innerHTML = ("Points : " + points);
  lifeCounter.innerHTML = ("Life : " + life);
}


// touch gestion
window.addEventListener(
  "keypress",
  function (e) {
    switch (e.keyCode) {
    case 113:
      heroX = heroX - 30;
      break;

    case 100:
      heroX = heroX + 30;
      break;

    case 106:
      hero.style.background = '#e67e22';
      break;

    case 107:
      hero.style.background = '#2ecc71';
      break;

    case 108:
      hero.style.background = '#9b59b6';
      break;

    case 109:
      hero.style.background = '#3498db';
      break;
    default:
      console.log("Erreur touche");
      break;


    }
    hero.style.left = heroX + "px";
    if (heroX > 600) {
      heroX = 600;
    } else if (heroX < 0) {
      heroX = 0;
    }
  },
  false
);
// collision check
function checkCollision(i) {
  hero.getBoundingClientRect().top;
  console.log(tsBlocks[i].getBoundingClientRect().top);
  let heroLeft = hero.getBoundingClientRect().left;
  let heroRight = hero.getBoundingClientRect().right;
  let heroBottom = hero.getBoundingClientRect().bottom;
  let tsBlocksLeft = tsBlocks[i].getBoundingClientRect().left;
  let tsBlocksRight = tsBlocks[i].getBoundingClientRect().right;
  let tsBlocksTop = tsBlocks[i].getBoundingClientRect().top;
  if (heroLeft >= tsBlocksLeft && heroRight <= (tsBlocksRight + 2) && 200>= tsBlocksTop && tsBlocksTop >= 180) {
    if (tsBlocks[i].style.borderColor == hero.style.background) {
      points += 10;
      playerWin.play();
    } else {
      life--;
      playerLoose.play();
    }
  } else {
    life--;
    playerLoose.play();
  }
}

function gameOver() {
  if (life === 0) {
    document.location.reload(true);
  }
}
