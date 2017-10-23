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
        stuff
    </Panel>
);

const welcomeTitle = (
    <h2>Sunday's Sermon</h2>
);

export default SundaySermon;
