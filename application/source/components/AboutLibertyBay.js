import React from 'react';
import { Panel } from 'react-bootstrap';

class AboutLibertyBay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    render () {
        return upcomingEvents(this);
    }
}

const upcomingEvents = (props) => (
    <Panel  header={ welcomeTitle } className="mainContainerSubPanel">
        <p>{aboutPartOne}</p>
        <p>{aboutPartTwo}</p>
        <p>{aboutPartThree}</p>
    </Panel>
);

const welcomeTitle = (
    <h2>About Liberty Bay PCA</h2>
);

const aboutPartOne = "Liberty Bay Presbyterian Church is a particular church of the Presbyterian Church in America (PCA), and member of the Presbytery of the Pacific Northwest. We are a relatively small congregation (120 average attendance) located in western WA, just across the Puget Sound from Seattle. We live in a \"distant\" suburb of the big city, enjoying the best of both a small town atmosphere with easy access to the beauty of God's creation (water & mountains) as well as the convenience of the city.";
const aboutPartTwo = "As a church body, Liberty Bay Presbyterian Church is strongly committed to the Reformed faith, the teaching & preaching of the Word of God, world missions and local ministry in our community. We have one of the best Christian education ministries in our area, focusing both on the biblical instruction of our covenant children (nursery through high school) as well as the training and equipping of our parents and adults through weekly Sunday School classes and Bible studies. We also support numerous local, domestic and foreign Missions ministries with our annual month-long Missions Conference being held every January. We are personally involved in local outreach through Vacation Bible School and youth camp ministries as well as several church sponsored mission related projects every year.";
const aboutPartThree = "Liberty Bay Presbyterian Church is neither a young church nor an elderly one. We are a cross-section of society and enjoy a good mix of young families, middle age ones, singles and senior citizens. In some ways, we are a little transient. We are near several military installations and therefore have families coming and going every two to three years. For the most part, we tend to be more conservative and traditional in our worship - with many of our people having been attracted to our church because of our emphasis on God-honoring, Christ-centered worship and the expository preaching of God's Word. We sing hymns and frequently use The Lord's Prayer, The Apostles' Creed, Responsive Readings and readings of God's Law in our services. At present, we have  adult as well as teen and children's choirs which are directed by volunteers from our congregation. We are also blessed with several excellent instrumentalists who occasionally participate in worship. We have and utilize a pipe organ as well as piano accompaniment in our services.";

export default AboutLibertyBay;