import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    render () {
        return (
            <div className="centerContainer">
                <div style={{width: "auto"}}/>{this.props.children}<div style={{width: "auto"}}/>
            </div>
        )
    }
}

export default Header;
