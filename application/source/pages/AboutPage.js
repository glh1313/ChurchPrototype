import React from 'react';
import CenterInPage from '../components/CenterInPage';
import AboutLibertyBay from '../components/AboutLibertyBay';
import WhatWeBelieve from '../components/WhatWeBelieve';

class AboutPage extends React.Component {
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
            <AboutLibertyBay/>
            <WhatWeBelieve/>
        </div>
    </CenterInPage>
);

export default AboutPage;