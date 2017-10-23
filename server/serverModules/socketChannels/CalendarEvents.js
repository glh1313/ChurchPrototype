const authorize = require('../process/authorizeCalendar');
const ASQ = require('asynquence-contrib');
const google = require('googleapis');
const buildCalendarEvents = require('../process/buildCalendarEvents');

function calendarEvents (socketConnection, socketServer) {
    const channelName = 'calendarEvents';

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

    const sendEvents = (done, eventData) => {
        socketConnection.emit(channelName, eventData);
    };

    const handleCalendarEventsRequest = (message) => {
        ASQ().then(authorize)
            .then(listEvents)
            .then(buildCalendarEvents)
            .then(sendEvents);

    };

    socketConnection.on(channelName, handleCalendarEventsRequest);
}

module.exports = calendarEvents;
