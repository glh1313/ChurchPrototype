import React from 'react';
import BookLayout from './BookLayout';
import EditBooks from './EditBooks';
import fetchDataContainer from '../containers/FetchDataContainer';

const dependent = (props) => ({
   classes: '/getsundayschoolclasses'
});

@fetchDataContainer(dependent)
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
                {BookLayout(this.props.classes, this.props.activeEdit)}
                <EditBooks showModal = {this.state.showModal} openModal = {this.handleCloseButton} closeModal = {this.handleCloseButton}/>
            </div>
        );
    }
}

export default SundaySchoolTab;