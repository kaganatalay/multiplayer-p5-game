const express = require('express');
const app = express();

const server = app.listen(3000, () => console.log('Listening on http://localhost:3000'));
let io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log(`A new client has connected with the id ${socket.id}`);

    socket.on('update', data => {
        console.log(data);
    });
});



