import React from 'react';
import BookLayout from './BookLayout';
import fetchDataContainer from '../containers/FetchDataContainer';

const dependents = (props) => ({
    bibleStudy: "/midweekbiblestudy"
});

@fetchDataContainer(dependents)
class MidWeekBibleStudyTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    render () {
        const component = (bibleStudy) => (
            <div>
                <p>{bibleStudy.headerText}</p>
                <h3>Poulsbo Midweek</h3>
                <div>
                    <div>Led by Pastor Andy Krasowski</div>
                    <div>Meets every Wednesday at  6 PM</div>
                    <div>Soup & salad supper followed by Bible study & prayer</div>
                    <div>Call the church office for location</div>
                </div>
                {BookLayout(bibleStudy.offeredClasses)}
            </div>
        );

        return (this.props.bibleStudy ? component(this.props.bibleStudy) : null);
    }
}

export default MidWeekBibleStudyTab;