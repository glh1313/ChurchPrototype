import React from 'react';
import { Panel } from 'react-bootstrap';

class WhatWeBelieve extends React.Component {
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
        <h5>Presbyterian Church in America</h5>
        <p>{part1}</p>
        <p>{part2}</p>
        <p>{part3}</p>
        <p>{part4}</p>
        <p>{part5}</p>
        <p>{part6}</p>
        <p>{part7}</p>
        <p>{part8}</p>
        <p>For a fuller exposition of our doctrinal position, please see the <a href="http://www.pcaac.org/resources/wcf/" target="_blank">Westminster Confession of Faith</a> or visit <a href="https://www.pcanet.org/" target="_blank">Presbyterian Church in America's website</a> </p>
    </Panel>
);

const part1 = "We believe the Bible is the written word of God, inspired by the Holy Spirit and without error in the original manuscripts. The Bible is the revelation of God’s truth and is infallible and authoritative in all matters of faith and practice.";
const part2 = "We believe in the Holy Trinity. There is one God, who exists eternally in three persons: the Father, the Son, and the Holy Spirit.";
const part3= "We believe that all are sinners and totally unable to save themselves from God’s displeasure, except by His mercy.";
const part4 = "We believe that salvation is by God alone as He sovereignly chooses those He will save. We believe His choice is based on His grace, not on any human individual merit, or foreseen faith.";
const part5 = "We believe that Jesus Christ is the eternal Son of God, who through His perfect life and   sacrificial death atoned for the sins of all who will trust in Him, alone, for salvation.";
const part6 = "We believe that God is gracious and faithful to His people not simply as individuals but as families in successive generations according to His Covenant promises.";
const part7 = "We believe that the Holy Spirit indwells God’s people and gives them the strength and wisdom to trust Christ and follow Him.";
const part8 = "We believe that Jesus will return, bodily and visibly, to judge all mankind and to receive His people to Himself.";

const welcomeTitle = (
    <h2>What We Believe</h2>
);



export default WhatWeBelieve;