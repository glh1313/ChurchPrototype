import React from 'react';
import UpcomingEvents from '../components/UpcomingEvents';
import SundaySermon from '../components/SundaySermon';
import CenterInPage from '../components/CenterInPage';
import WelcomePanel from '../components/WelcomPanel';
import ServiceTimes from '../components/ServiceTimes';
import { Panel } from 'react-bootstrap';

class HomePage extends React.Component {
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
                <WelcomePanel/>
                <UpcomingEvents/>
                <SundaySermon/>
                <ServiceTimes/>
            </div>
        </CenterInPage>
);

export default HomePage;
