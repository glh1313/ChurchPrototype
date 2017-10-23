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
        Located right off Highway 305 in the beautiful Scandinavian City of Poulsbo, we long to reach and equip the people of our community to know and serve the Lord Jesus Christ. In addition to our 9:30 a.m. Sunday School and 11:00 a.m. Sunday morning service, we have several groups that meet together throughout the week for fellowship, encouragement, and Bible study. We would love to have you visit with us!
    </Panel>
);

const welcomeTitle = (
    <h2>Welcome</h2>
);

export default SundaySermon;