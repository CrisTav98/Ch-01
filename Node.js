const express = require('express');
const server = express();
const ports = 3000;

server.getMaxListeners('/hello', (req, res) => {
    res.send('Hello World my name is cristian');
});

server.listen(ports, function () {
    console.log('Listening on ' + ports);
});

"launch": "node server.js",
"start": "node server.js",
"dev": "nodemon server.js"

