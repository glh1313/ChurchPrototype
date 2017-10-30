import React from 'react';
import AboutLibertyBay from '../components/AboutLibertyBay';
import WhatWeBelieve from '../components/WhatWeBelieve';
import centerInDivContainer from '../containers/CenterInDivContainer';

@centerInDivContainer
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
        return (
            <div className="pageContainer">
                <AboutLibertyBay/>
                <WhatWeBelieve/>
            </div>
        );
    }
}

export default AboutPage;