import React from 'react';
import { Grid, Row, Col, Image, Glyphicon, Button, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';

class UpcomingEventsRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: props.children || null,
            showModal: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    render () {
        return eventsRow(this);
    }

    openModal () {
        this.setState({showModal: true});
    }

    closeModal () {
        this.setState({showModal: false});
    }
}

const createDescription = (description) => {
    if (description) {
        return (<OverlayTrigger trigger="click" placement="top" overlay={tip(description)}>
            <div className="eventRowDescription">{description}</div>
        </OverlayTrigger>)

    }
};

const createLocation = (location) => {
    if (location) {
        return (<OverlayTrigger placement="top" overlay={tip(location)} rootClose>
            <Button bsSize="xsmall" bsStyle="link" className="eventLocationButton"><Glyphicon glyph="globe"/></Button>
        </OverlayTrigger>)
    }
};

const tip = (text) => (
    <Tooltip id="tooltip"><strong>{text}!</strong></Tooltip>
);

const buildModalLocation = (location) => {
    if (location) {
        return (
        <div>
            <h4>Location  <Glyphicon glyph="globe"/></h4>
            <p>{location}</p>
        </div>
        )
    }
};

const buildModalDescription = (description) => {
    if (description) {
        return (
            <div>
                <h4>Description</h4>
                <p>{description}</p>
            </div>
        )
    }
};

const buildModalText = (eventObject) => {
    return (
        <div>
            <h4>Date and Time</h4>
            <p>{eventObject.dateTime}</p>
            {buildModalLocation(eventObject.location)}
            {buildModalDescription(eventObject.description)}
        </div>
    )
};

const eventsRow = (props) => (
    <Grid fluid className="eventRow">
        <Row>
            <Col md = {4} xsHidden>
                <div className="eventImage">
                <Image src = {props.state.event.imageUrl} responsive/>
                </div>
            </Col>
            <Col md = {8}>
                <div className="eventTitle" onClick={props.openModal}>{props.state.event.eventTitle}{createLocation(props.state.event.location)}</div>
                <div className="eventDateTime">{props.state.event.dateTime}</div>
                {createDescription(props.state.event.description)}
            </Col>
        </Row>
        <Modal show={props.state.showModal} onHide={props.closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>{props.state.event.eventTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{buildModalText(props.state.event)}</Modal.Body>
            <Modal.Footer>
                <Button onClick={props.closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    </Grid>

);

export default UpcomingEventsRow;

