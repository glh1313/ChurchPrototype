import React from 'react';
import MainMenu from './mainMenu';
import CenterInPage from './CenterInPage';
import MissionStatement from './MissionStatement';
import { Image } from 'react-bootstrap';

class LargeHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    render () {
        return (mainMenuInstance(this.props))
    }
}

const mainMenuInstance = (props) => (
    <div className="hideLgHeader">
        <CenterInPage>
            <div className="largeHeader">
                <Image src="churchLogo.png" className="headerImage"/>
                <MissionStatement/>
                <MainMenu history={props.history}/>
            </div>
        </CenterInPage>
    </div>
);

export default LargeHeader;
