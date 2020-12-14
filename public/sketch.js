let socket;

let player;
let players = [];

function setup() {
    createCanvas(800, 800);
    player = new Player(createVector(random(width), random(height)));

    socket = io.connect('http://localhost:3000');
    socket.on('connect', () => {
        console.log(`Successfuly connected to server. Socket id: ${socket.id}`);
    });

    let data = {
      x: player.position.x,
      y: player.position.y
    }
    console.log(data);
    socket.emit('initialize', data);
    socket.on('beat', objects => {
        players = objects;
    });
}

function draw() {
    noStroke();
    background(51);

    for(let i = players.length - 1; i >= 0; i--) {
      if(players[i].id != socket.id) {
        push();
        noStroke();
        fill('red');
        circle(players[i].x, players[i].y, player.radius * 2);
        pop();   
      }
    }

    player.render();
    player.physics();
    player.control();
    
    let data = {
      x: player.position.x,
      y: player.position.y
    }
    socket.emit('update', data);
    
}

function keyPressed() { 
    for(let i = 0; i < player.controls.length; i++) {
      if(key == player.controls[i][0]) {
        player.controls[i][1] = true;
      }
    }
}
  
function keyReleased() {
    for(let i = 0; i < player.controls.length; i++) {
      if(key == player.controls[i][0]) {
        player.controls[i][1] = false;
      }
    }
}

