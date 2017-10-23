import React from 'react';
import CenterInPage from '../components/CenterInPage';
import { Panel } from 'react-bootstrap';

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
        console.log('We are going to render this page');
        return mainMenuInstance(this);
    }
}

const mainMenuInstance = (props) => (
    <CenterInPage>
        <div className="pageContainer">
            <Panel header={ welcomeTitle } className="mainContainerSubPanel"></Panel>
        </div>
    </CenterInPage>
);

const welcomeTitle = "Visiting";

export default VisitingPage;