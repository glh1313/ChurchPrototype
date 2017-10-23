import React from 'react';
import BookLayout from './BookLayout';
import EditBooks from './EditBooks';
import {Button} from 'react-bootstrap';

const offeredClasses = [
    {
        title: "The Message of Colossians & Philemon",
        author: "By Dick Lucas",
        text: [
            "Fullness and freedom--two aspects of Christian life that we all want to share. Paul wrote about them at length (and depth) in his letter to the Christians at Colossae, where certain new teachers were proclaiming that \"mere Christianity\" is not enough. There is, they suggested, a fuller experience, a greater liberation, than they had so far enjoyed. But Paul was adamant: all God's fullness is in Christ alone, and only through his complete work are we set free.",
            "These are the great objective truths of the faith that Dick Lucas highlights in his exposition, enabling us to see both the riches that are ours in Christ and the irrelevance--even blasphemy--of all would-be improvements on what God has done. "
        ],
        imageURL: "/books/image1.jpg"
    },
    {
        title: "The Blessing of Humility",
        author: "By Jerry Bridges",
        text: [
            "We all admire humility when we see it. But how do we practice it? How does humility—the foundational virtue of the normal Christian life—become a normal part of our everyday lives?",
            "Jerry Bridges sees in the Beatitudes a series of blessings from Jesus, a pattern for humility in action. Starting with poverty in spirit—an acknowledgment that in and of ourselves we are incapable of living holy lives pleasing to God—and proceeding through our mourning over personal sin, our hunger and thirst for righteousness, our experience of persecutions large and small, and more, we discover that humility is itself a blessing: At every turn, God is present to us, giving grace to the humble and lifting us up to blessing."
        ],
        imageURL: "/books/image2.jpg"
    }
];

class SundaySchoolTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.handleCloseButton = this.handleCloseButton.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    handleCloseButton () {
        this.setState({
            showModal: false
        })
    }

    openModal () {
        this.setState({
            showModal: true
        })
    }

    render () {
        return (
            <div>
                {BookLayout(offeredClasses, this.props.activeEdit)}
                <EditBooks showModal = {this.state.showModal} openModal = {this.handleCloseButton} closeModal = {this.handleCloseButton}/>
            </div>
        );
    }
}

export default SundaySchoolTab;