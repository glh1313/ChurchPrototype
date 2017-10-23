import React from 'react';
import SmallHeader from './SmallHeader';
import LargeHeader from './LargeHeader';
import {withRouter} from 'react-router-dom';

class Header extends React.Component {
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
    <div>
        <LargeHeader history={props.history}/>
        <SmallHeader/>
    </div>
);

export default withRouter(Header);
