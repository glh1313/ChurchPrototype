let fs = require('fs');
let path = require('path');
let Socket = require('socket.io');
let dirPath = '../socketChannels';

function setup (socketConnection, socketServer) {
    fs.readdir(path.resolve(__dirname, dirPath), function (error, files) {
        if (!error && files.length) {
            files.forEach(function(fileName) {
                if (fileName !== 'token.json') {
                    let file = require(dirPath + '/' + fileName);
                    new file(socketConnection, socketConnection);
                }
            });
        }
    });
}

function socketController(httpServer, callback) {
    const socket = Socket.listen(httpServer);

    const handleOn = (socketConnection) => {
        console.log('We connected to socket');
        setup(socketConnection, httpServer)
    };

    socket.on('connection', handleOn);
}

module.exports = socketController;
