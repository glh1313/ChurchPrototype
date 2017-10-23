/**
 * Created by Grant on 11/18/16.
 */
/**
 * Setup for the application.
 **/
let express = require('express'),
    bodyParser = require('body-parser'),
    ServerController = require('./serverModules/serverController/ServerController'),
    socketController = require('./serverModules/serverController/SocketController'),
    path = require('path');
    // loggingManagement = require('./serverModules/loggingManagement/LoggingManagement');

/**
 * Start up for the application.
 *
 * @param {Object} config - config object
 *
 * Note: Mostly boilerplate code
 **/
function startApp (config) {
    let app = express();
    let socket;
    let server;

    app.set('env', 'production');
    app.set('port', process.env.PORT || 3000);
    app.disable('etag');

    app.use(express.static(path.join(__dirname, '../application/build')));
    app.use(bodyParser.json());

    new ServerController(app, config);

    config.server = app.listen(app.get('port'), function () {
        socketController(config.server);
    });


    app.on('error', function (error) {
        console.log(error);
    });

    process.on('uncaughtException', function (error) {
        console.error('Uncaught Exception: ', error.message);
        console.error(error.stack);
        process.exit(1);
    });
}

module.exports = startApp;