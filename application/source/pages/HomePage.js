import React from 'react';
import UpcomingEvents from '../components/UpcomingEvents';
import SundaySermon from '../components/SundaySermon';
import WelcomePanel from '../components/WelcomPanel';
import ServiceTimes from '../components/ServiceTimes';
import centerInDivContainer from '../containers/CenterInDivContainer';

@centerInDivContainer
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
        return (
            <div className="pageContainer">
                <WelcomePanel/>
                <UpcomingEvents/>
                <SundaySermon/>
                <ServiceTimes/>
            </div>
        );
    }
}

export default HomePage;
