import React from 'react';
import { Panel } from 'react-bootstrap';

class SundaySermon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    render () {
        return upcomingEvents(this);
    }
}

const upcomingEvents = (props) => (
    <Panel  header={ welcomeTitle } className="mainContainerSubPanel">
        <div>Sunday School: 9:30am</div>
        <div>Morning Worship: 11:00am</div>
    </Panel>
);

const welcomeTitle = (
    <h2>Service Times</h2>
);

export default SundaySermon;
