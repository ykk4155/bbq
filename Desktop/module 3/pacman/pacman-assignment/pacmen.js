const pacMen = []; // This array holds all the pacmen
var canvas = document.getElementById("canvas");
var getContext = canvas.getContext("2d");
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; 

function setToRandom(scale) {
  return {
    var x = Math.floor(Math.random() * innerWidth);
    var y = Math.floor(Math.random() * innerHeight);
  }
}
  var vx = Math.floor(Math.random() * 2);
  var vy = Math.floor(Math.random() * 4);
  move();

  function move() {
    requestAnimationFrame(move);
  }

  // Factory to make a PacMan at a random position with random velocity
  function makePac() {
    // returns an object with random values scaled {x: 33, y: 21}
    let velocity = setToRandom(10); // {x:?, y:?}
    let position = setToRandom(200);


    // Add image to div id = game
    var pic = "";
    function displayImage(pic) {
      let game = document.getElementById('game');
      let newimg = document.createElement('img');
      newimg.style.position = 'absolute';
      newimg.src = pic;
      newimg.width = 100;
      game.append(newimg);
    }
    pic = './images/PacMan1.png';
    displayImage(pic);

    makePac();

    // TODO add new Child image to game
    game.appendChild(newimg);

    // return details in an object
    return {
      position,
      velocity,
      newimg,
    }
}

  function update() {
    // loop over pacmen array and move each one and move image in DOM
    pacMen.forEach((item) => {
      checkCollisions(item);
      item.position.x += item.velocity.x;
      item.position.y += item.velocity.y;
      item.newimg.style.left = item.position.x;
      item.newimg.style.top = item.position.y;
    });
    setTimeout(update, 20);
  }

  function checkCollisions() {
    // TODO: detect collision with all walls and make pacman bounce
    if (x > innerWidth)
      vx = 0 - vx;
  
    if (x < 0)
      vx = 0 - vx;
  
    if (y > innerHeight)
      vy = 0 - vy;
  
    if (y < 0)
      vy = 0 - vy;
  
    x = x + vx;
    y = y + vy;
  }

  setInterval(checkCollisions, 10);

  function makeOne() {
    pacMen.push(makePac()); // add a new PacMan
  }
  makeOne();

  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = { checkCollisions, update, pacMen };
  }

