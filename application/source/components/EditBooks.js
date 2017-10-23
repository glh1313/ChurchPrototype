import React from 'react';
import { Modal, Button } from "react-bootstrap";
import Wizard from "./wizard/Wizard";
import LoadBookImage from "./wizards/editBooksWizard/LoadBookImage";

class EditBooks extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    show () {
        return (
            <Modal.Dialog>
                <Modal.Header>Edit Book</Modal.Header>
                <Modal.Body>
                    <Wizard submitCallback = {this.props.closeModal}>
                        <LoadBookImage/>
                        <LoadBookImage/>
                    </Wizard>
                </Modal.Body>
            </Modal.Dialog>
        )
    }


    render () {
        return (
            <div className="static-modal">
                {(this.props.showModal ? this.show(): null)}
            </div>
        )
    }
}

export default EditBooks;