import React from 'react';
import {Button, Glyphicon } from 'react-bootstrap';

class SmallHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    render () {
        return (mainMenuInstance(this))
    }
}

const mainMenuInstance = (props) => (
    <div className="hideSmHeader">
        <Button bsSize="large" bsStyle="link"><Glyphicon glyph="menu-hamburger"/></Button>
    </div>
);

export default SmallHeader;
