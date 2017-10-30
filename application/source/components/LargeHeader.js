import React from 'react';
import MainMenu from './mainMenu';
import MissionStatement from './MissionStatement';
import { Image } from 'react-bootstrap';
import centerInDivContainer from '../containers/CenterInDivContainer';

@centerInDivContainer
class LargeHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    render () {
        return (
            <div className="hideLgHeader">
                <div className="largeHeader">
                    <Image src="churchLogo.png" className="headerImage"/>
                    <MissionStatement/>
                    <MainMenu history={this.props.history}/>
                </div>
            </div>
        );
    }
}

export default LargeHeader;
