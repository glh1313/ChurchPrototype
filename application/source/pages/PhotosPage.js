import React from 'react';
import { Panel } from 'react-bootstrap';
import centerInDivContainer from '../containers/CenterInDivContainer';

@centerInDivContainer
class PhotosPage extends React.Component {
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
                <Panel header={ welcomeTitle } className="mainContainerSubPanel"></Panel>
            </div>
        );
    }
}

const welcomeTitle = "Photos";

export default PhotosPage;