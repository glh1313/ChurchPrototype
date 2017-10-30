import React from 'react';
import { Panel, Media } from 'react-bootstrap';
import centerInDivContainer from '../containers/CenterInDivContainer';

@centerInDivContainer
class LeadershipPage extends React.Component {
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
                <Panel header={ welcomeTitleStaff } className="mainContainerSubPanel">
                    <Media>
                        <Media.Left>
                            <img width={130} height={156} src={pastorImage}/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>Andy Krasowski - Pastor</Media.Heading>
                            <Media.Body>
                                <p>{pastorText}</p>
                            </Media.Body>
                        </Media.Body>
                    </Media>
                    <Media>
                        <Media.Left>
                            <img width={130} height={156} src={assistantImage}/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>Russ Tamm - Assistant to the pastor</Media.Heading>
                            <Media.Body>
                                <p>{assistantPastorText}</p>
                            </Media.Body>
                        </Media.Body>
                    </Media>
                </Panel>
                <Panel header={ welcomeTitleOfficers } className="mainContainerSubPanel">
                    <Media>
                        <Media.Left>
                            <img width={311} height={215} src={sessionMembersImage}/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>The Session</Media.Heading>
                            <Media.Body>
                                <div>Mel Harless</div>
                                <div>Andy Krasowski</div>
                                <div>Jeff McGarvey</div>
                                <div>Dave Stickney</div>
                                <div>John Thomas</div>
                            </Media.Body>
                        </Media.Body>
                    </Media>
                    <Media>
                        <Media.Left>
                            <img width={315} height={214} src={diaconateImage}/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>The Diaconate</Media.Heading>
                            <Media.Body>
                                <div>Brian Brandt</div>
                                <div>Jay Ellis</div>
                                <div>Bill Lockard</div>
                                <div>Adam Mancus</div>
                                <div>Chris Stricklin</div>
                                <div>Rob Weiss</div>
                            </Media.Body>
                        </Media.Body>
                    </Media>
                </Panel>
            </div>
        );
    }
}

const pastorImage = "/Leadership/pastor.png";
const assistantImage = "/Leadership/assistant.png";
const sessionMembersImage = "/Leadership/sessionMembers.png";
const diaconateImage = "/Leadership/diaconate.png";
const welcomeTitleStaff = "Staff";
const welcomeTitleOfficers = "Officers";
const pastorText = "Pastor Krasowski was born and raised in Baltimore, MD and has pastored two  congregations prior to his coming to Liberty Bay Presbyterian Church in the summer of 1986. He is a 1978 graduate of Covenant Seminary in St. Louis. He and his wife Nancy have four grown children and nine grandchildren";
const assistantPastorText = "Russ grew up in the Northwest and attended the University of Washington.  While pursuing a degree in International Studies and participating actively in Reformed University Fellowship, Russ experienced a deep desire to call the lost and serve God’s people through the ministry of the Word. After graduating from Covenant Seminary (2012), he and his family moved back to the peninsula and joined the staff at LBPC. Russ and his wife Brianna have three daughters.";

export default LeadershipPage;