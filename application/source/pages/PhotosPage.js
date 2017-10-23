import React from 'react';
import CenterInPage from '../components/CenterInPage';
import Wizard from '../components/wizard/Wizard';
import TestPannel from '../components/wizard/TestPannel';
// import { Panel } from 'react-bootstrap';

class PhotosPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.handleMenuChange = this.handleMenuChange.bind(this);
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    handleMenuChange () {}

    render () {
        return mainMenuInstance(this);
    }
}

const mainMenuInstance = (props) => (
    <CenterInPage>
        <div className="pageContainer">
            {/*<Panel header={ welcomeTitle } className="mainContainerSubPanel"></Panel>*/}
            <Wizard>
                <TestPannel step={1}>Step 1</TestPannel>
                <TestPannel step={2}>Step 2</TestPannel>
            </Wizard>
        </div>
    </CenterInPage>
);

const welcomeTitle = "Photos";

export default PhotosPage;