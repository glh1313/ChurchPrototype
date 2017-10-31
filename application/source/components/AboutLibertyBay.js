import React from 'react';
import { Panel } from 'react-bootstrap';
import fetchDataContainer from '../containers/FetchDataContainer';
import formatTextContainer from '../containers/FormatTextContainer';

const dependents = (props) => ({
    text: "/aboutlibertybay"
});

@fetchDataContainer(dependents)
    @formatTextContainer
class AboutLibertyBay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    render () {
        return (
            <Panel  header={ welcomeTitle } className="mainContainerSubPanel">{this.props.children}</Panel>
        );
    }
}

const welcomeTitle = (
    <h2>About Liberty Bay PCA</h2>
);


export default AboutLibertyBay;