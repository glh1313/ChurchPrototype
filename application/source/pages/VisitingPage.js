import React from 'react';
import { Panel } from 'react-bootstrap';
import centerInDivContainer from '../containers/CenterInDivContainer';

@centerInDivContainer
class VisitingPage extends React.Component {
    constructor(props) {
        super(props);
        console.log('Foo bar');

        this.state = {};
        this.handleMenuChange = this.handleMenuChange.bind(this);
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    handleMenuChange () {}

    render () {
        return (
            <div className="pageContainer">
                <Panel header={ welcomeTitle } className="mainContainerSubPanel"></Panel>
            </div>
        );
    }
}

const welcomeTitle = "Visiting";

export default VisitingPage;