let moment = require('moment');

const getImageUrl = (googleAttachmentObject) => {
    //If no image is selected then use a default
    return 'SundaySchool.jpeg';
};

const getDateTime = (start, end) => {
    let returnString = '';
    let dateFormat = 'ddd MMM, Do';
    let timeFormat = 'h:mma';
    if (start.dateTime && end.dateTime) {
        let startDateTime = moment(start.dateTime);
        let endDateTime = moment(end.dateTime);
        let endReturn = endDateTime.isSame(startDateTime, 'day') ? endDateTime.format(timeFormat) : endDateTime.format(dateFormat + ' ' + timeFormat);
        returnString = startDateTime.format(dateFormat + ' ' + timeFormat) + ' - ' + endReturn;
    }
    return returnString;
};

const buildEventObject = (event) => {
    let returnObject = {};
    if (event && event.summary && event.start && event.end) {
        returnObject.eventTitle = event.summary;
        returnObject.dateTime = getDateTime(event.start, event.end);
        returnObject.description = event.description || null;
        returnObject.location = event.location || null;
        returnObject.imageUrl = getImageUrl(event.attachments);
    } else returnObject = null;

    return returnObject;
};

const buildEvents = (done, events) => {
    done(events.map(buildEventObject));
};

module.exports = buildEvents;
