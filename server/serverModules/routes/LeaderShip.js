/**
 * Sets up the /leadership URL.
 *
 * @param {Object} app - the application object.
 * @param {Object} config - the configuration object. This
 *                          object may not be needed but is
 *                          passed in for consistency.
 *
 * Note: The app is a single page app using react-router. This
 *       route is just used to serve up the application if it
 *       is requested from {url}/leadership.
 **/
const path = require('path');

function route(app, config) {
    app.get('/leadership', function (req, res) {
        console.log('We have a request for leadership.');
        res.sendFile(path.resolve(__dirname, '../../../application/build/index.html'));
    });
}

module.exports = route;