
//var sound
let player = document.querySelector('#audioPlayer'),
    playerWin = document.querySelector('#audioPlayerWin'),
    playerLoose = document.querySelector('#audioPlayerLoose');
//var character
let hero = document.querySelector("#square"),
    heroX = 90,
    heroY = 60,
    speedSquare = 10;

//var counter
let level = 1,
    points = 0,
    life = 5;

//var functions
let spaceGame = document.querySelector("#spaceGame"),
    levelCounter = document.querySelector("#levelCounter"),
    pointsCounter = document.querySelector("#pointsCounter"),
    lifeCounter = document.querySelector("#lifeCounter"),
    startImg = document.querySelector("#startImg");

// tables's position
let positionTop = new Array(),
    positionLeft = new Array(),
    positionRight = new Array(),
    tsBlocks = new Array();

// var help move blocks 
let dirBlock = 15,
    speedBlock = 200,
    speedGen = 1750;

// var blocks functions
let block,
    width = 0,
    mLeft = 0,
    color = 0,
    j = 0,
    k = 0;

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
 //Remove the blocks
    let x = document.querySelector("#astro" + k);
    x.remove(x);

    k++;
  }
  if (positionTop[0] === -40) {
    //console.log(positionTop[0], " block ");
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
      console.log("Wrong touch");
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
  //console.log(tsBlocks[i].getBoundingClientRect().top);
  let heroLeft = hero.getBoundingClientRect().left,
      heroRight = hero.getBoundingClientRect().right,
      heroBottom = hero.getBoundingClientRect().bottom,
      tsBlocksLeft = tsBlocks[i].getBoundingClientRect().left,
      tsBlocksRight = tsBlocks[i].getBoundingClientRect().right,
      tsBlocksTop = tsBlocks[i].getBoundingClientRect().top;
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
// reload when loose
function gameOver() {
  if (life === -1) {
    document.location.reload(true);
  }
}
