import React from 'react';
import BookLayout from './BookLayout';

const offeredClasses = [
    {
        title: "Christ-Centered Exposition Commentary: Exalting Jesus in 1, 2 & 3 John",
        author: "By Daniel Akin",
        text: [
            "This book is not a traditional commentary. It does not attempt a full-scale exegesis, nor does it provide explanations of some of the subtle arguments in the Johannine Letters that bind the text together. Rather, it is an exposition of John's Letters -- demonstrated, for example, in the way most of the outlines are cast in the second person, often in the imperative, like points in many sermons. The author takes pains to connect the dominant themes of each section of the biblical text with central Christian truths. Each chapter ends with an extensive \"Reflect and Discuss\" section -- one of the strongest features of the book.",
            "Daniel L. Akin is the president of Southeastern Baptist Theological Seminary in Wake Forest, North Carolina. He holds a Ph.D. in Humanities from the University of Texas at Arlington and is the author or editor of numerous books and Bible commentaries including Theology for the Church and the New American Commentary on 1, 2, and 3 John."
        ],
        imageURL: "/books/image3.jpg"
    }

];

class MidWeekBibleStudyTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    render () {
        return mainMenuInstance(this);
    }
}

const mainMenuInstance = (props) => (
    <div>
        <p>{headerText}</p>
        <h3>Poulsbo Midweek</h3>
        <div>
            <div>Led by Pastor Andy Krasowski</div>
            <div>Meets every Wednesday at  6 PM</div>
            <div>Soup & salad supper followed by Bible study & prayer</div>
            <div>Call the church office for location</div>
        </div>
        {BookLayout(offeredClasses)}
    </div>
);

const headerText = "With our families living throughout Kitsap County, we offer several midweek Bible studies in various homes in our community. These gatherings encourage study of God’s Word and prayer as well as regular fellowship among our people. Each study is led by an elder with the study materials approved by our Session.";

export default MidWeekBibleStudyTab;