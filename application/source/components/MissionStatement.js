import React from 'react';

class MissionStatement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    render () {
        return (mainMenuInstance(this))
    }
}

const mainMenuInstance = (props) => (
    <div className="missionStatementContainer">
        <span className="missionStatementSubLeft">Reformed in Doctrine</span>
        <span className="missionStatementSub">Compassionate in Ministry</span>
        <span className="missionStatementSubRight">Evangelistic in Outreach</span>
    </div>
);

export default MissionStatement;

