import React from 'react';
import { Panel } from 'react-bootstrap';
import socket from 'socket.io-client';
import UpcomingEventsRow from './UpcomingEventsRow';

class UpcomingEvents extends React.Component {
    constructor(props) {
        super(props);

        this.socket = socket.connect('http://localhost:3000');
        this.state = {
            upcomingEvents: null
        };

        this.handleUpcomingEvents = this.handleUpcomingEvents.bind(this);
    }

    handleUpcomingEvents (message) {
        this.setState({
            upcomingEvents: message
        });
    }

    componentWillMount () {}

    componentDidMount () {
        this.socket.emit('calendarEvents', 'Test me');
        this.socket.on('calendarEvents', this.handleUpcomingEvents);
    }

    componentWillUnmount () {
        this.socket.close();
    }

    render () {
        return upcomingEvents(this);
    }
}

const createRow = (rowData) => {
    return <UpcomingEventsRow key={rowData.eventTitle + rowData.dateTime}>{rowData}</UpcomingEventsRow>
};

const createRows = (rows) => {
    let returnValue = <div>There currently aren't any events.</div>;
     if (rows && rows.length) {
         return rows.map(createRow);
     }

    return returnValue;
};

const upcomingEvents = (props) => (
    <Panel collapsible header={ welcomeTitle } className="mainContainerSubPanel" key="upcomingEvents">
        {createRows((props.state.upcomingEvents) ? props.state.upcomingEvents : null)}
    </Panel>
);

const welcomeTitle = (
    <h2>Upcoming Events</h2>
);

export default UpcomingEvents;
