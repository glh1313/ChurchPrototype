/**
 * Sets up the /photos URL.
 *
 * @param {Object} app - the application object.
 * @param {Object} config - the configuration object. This
 *                          object may not be needed but is
 *                          passed in for consistency.
 *
 * Note: The app is a single page app using react-router. This
 *       route is just used to serve up the application if it
 *       is requested from {url}/photos.
 **/
const path = require('path');

function route(app, config) {
    app.get('/photos', function (req, res) {
        console.log('We have a request for photos.');
        res.sendFile(path.resolve(__dirname, '../../../application/build/index.html'));
    });
}

module.exports = route;