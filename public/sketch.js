let socket = io.connect('http://localhost:3000');

socket.on('connect', () => {
    console.log(`Successfuly connected to server. Socket id: ${socket.id}`);
});

function setup() {
    createCanvas(400, 400);
    background(51);
}

function draw() {
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 20);
}

setInterval(() => {
    socket.emit('update', floor(random(100)));
}, 500);
