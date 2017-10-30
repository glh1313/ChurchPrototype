import React from 'react';
import { Panel, Media, Glyphicon, Label } from 'react-bootstrap';
import centerInDivContainer from '../containers/CenterInDivContainer';

@centerInDivContainer
class ConnectPage extends React.Component {
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
                <Panel header={ welcomeTitle } className="mainContainerSubPanel">
                    <h5>{text}</h5>
                    <div>
                        <Media>
                            <Media.Body>
                                <Media.Heading>To contact us:</Media.Heading>
                                <Media>
                                    <Media.Left>
                                        <span style={mediaStyle}><Glyphicon glyph="envelope"/></span>
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>Mail</Media.Heading>
                                        <Media.Body>
                                            <div>Liberty Bay Presbyterian Church</div>
                                            <div>P.O. Box 157</div>
                                            <div>Poulsbo, WA 98370</div>
                                        </Media.Body>
                                    </Media.Body>
                                </Media>
                                <Media>
                                    <Media.Left>
                                        <span style={mediaStyle}><Glyphicon glyph="phone-alt"/></span>
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>Phone</Media.Heading>
                                        <Media.Body>
                                            <div>(360) 779-7545</div>
                                        </Media.Body>
                                    </Media.Body>
                                </Media>
                                <Media>
                                    <Media.Left>
                                        <span style={mediaStyle}><Glyphicon glyph="send"/></span>
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>Email</Media.Heading>
                                        <Media.Body>
                                            <div>libertybaypca@yahoo.com</div>
                                        </Media.Body>
                                    </Media.Body>
                                </Media>
                                <Media>
                                    <Media.Left>
                                        <span style={mediaStyle}><Glyphicon glyph="globe"/></span>
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>Location</Media.Heading>
                                        <Media.Body>
                                            <div>18561 9th Ave  NE</div>
                                            <div>Poulsbo WA, 98370</div>
                                        </Media.Body>
                                    </Media.Body>
                                </Media>
                            </Media.Body>
                            <Media.Right>
                                <img width={251} height={192} src={connectImage}/>
                            </Media.Right>
                        </Media>
                    </div>
                </Panel>
            </div>
        );
    }
}

const mediaStyle = {
    height: '100px',
    width: '100px'
};

const welcomeTitle = "Connect with Liberty Bay PCA";
const text = "If you have any questions or would like to know more about our local church, ministries or doctrine, please do not hesitate to write, email or call us at the address and phone number listed below. May God richly bless you today and may you truly find and experience His goodness, mercy and grace in your life through saving faith in His Son, our Lord and Savior, Jesus Christ.";
const connectImage = 'contactImage.png';

export default ConnectPage;