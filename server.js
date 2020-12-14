const express = require('express');
const app = express();

const server = app.listen(3000, () => console.log('Listening on http://localhost:3000'));
let io = require('socket.io')(server);

app.use(express.static('public'));

let players = [];
setInterval(() => {
    io.sockets.emit('beat', players);
}, 10);

io.on('connection', (socket) => {
    console.log(`A new client has connected with the id ${socket.id}`);
    socket.on('initialize', object => {
        const entry = {
            id: socket.id,
            x: object.x,
            y: object.y
        }
        players.push(entry);
    });

    socket.on('update', object => {
        let player;
        for(let i = 0; i < players.length; i++) {
            if(socket.id == players[i].id) {
                player = players[i];
            }
        }
        if(player) {
            player.x = object.x;
            player.y = object.y;
        }
        
    });
});





