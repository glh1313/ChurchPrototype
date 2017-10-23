import React from 'react';
import DropZone from 'react-dropzone';
import CenterInPage from '../../CenterInPage';

class LoadBookImage extends React.Component {
    constructor(props) {
        super(props);

        this.step = 0;

        this.state = {};

        this.onDrop = this.onDrop.bind(this);
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    onDrop (accepted, rejected) {
        this.setState({ accepted, rejected });
    }

    render () {
        return (
            <CenterInPage>
                <DropZone accept="image/jpeg, image/png" onDrop={this.onDrop}>
                    <div className="dropImages">
                        <p>Click or drop image</p>
                        <p>to select files to upload.</p>
                        <p>Only images will be accepted</p>
                    </div>
                </DropZone>
            </CenterInPage>
        )
    }
}

export default LoadBookImage;