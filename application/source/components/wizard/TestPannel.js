import React from 'react';

class TestPannel extends React.Component {
    constructor(props) {
        super(props);

        this.step = 0;

        this.state = {};
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    closeModal () {
        this.setState({showModal: false});
    }

    openModal () {
        this.setState({showModal: true});
    }

    render () {
        return (testPannelInstance(this))
    }
}

const testPannelInstance = (props) => (
    <div>{props.props.children}</div>
);

export default TestPannel;