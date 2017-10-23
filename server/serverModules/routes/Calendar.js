let google = require('googleapis');
let authorize = require('../process/authorizeCalendar');
let readline = require('readline');

const ASQ = require('asynquence-contrib');
let buildCalendarEvents = require('../process/buildCalendarEvents');


function listEvents(done, auth) {
    let calendar = google.calendar('v3');

    let schema = {
        auth: auth,
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime'
    };


    const handleResult = (err, response) => {
        if (err || !response.items.length) {
            done([]);
            return;
        }
        done(response.items);

    };

    calendar.events.list(schema, handleResult);
}



function calendar(app, config) {
    app.get('/calendar', function (req, res) {
        console.log('We have a request for calendar.');
        ASQ().then(authorize)
            .then(listEvents)
            .then(buildCalendarEvents)
            .then(function (done, results) {
                console.log(results);
                res.status(200).send(results);
            });
    });
}

module.exports = calendar;
