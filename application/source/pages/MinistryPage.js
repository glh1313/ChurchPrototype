import React from 'react';
import SundaySchoolTab from '../components/SundaySchoolTab';
import MidWeekBibleStudyTab from "../components/MidWeekBibleStudyTab";
import { Panel, Accordion, Navbar, Button, Glyphicon } from 'react-bootstrap';
import centerInDivContainer from '../containers/CenterInDivContainer';

@centerInDivContainer
class MinistryPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: 1,
            allowEdit: true,
            activeEdit: false
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleEditButton = this.handleEditButton.bind(this);
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    handleSelect (key) {
        this.setState({key});
    }

    handleEditButton () {
        this.setState({
            activeEdit: !this.state.activeEdit
        });
    }

    handleAddButton () {

    }

    titleBar (title) {
        const editIcon = (
            <Button bsClass = "editButtons" onClick={this.handleEditButton}><Glyphicon glyph="pencil"/></Button>
        );

        const addIcon = (
            <Button bsClass = "editButtons" onClick={this.handleAddButton}><Glyphicon glyph="plus"/></Button>
        );

        const editBar = (
            <Navbar.Collapse>
                <Navbar.Form pullRight>
                    {editIcon}
                    {this.state.activeEdit ? addIcon : null}
                </Navbar.Form>
            </Navbar.Collapse>
        );

        return (
            <Navbar fluid >
                <Navbar.Header bsClass = "minitriesNavBar">
                    <Navbar.Text>{title}</Navbar.Text>
                    <Navbar.Toggle/>
                </Navbar.Header>
                {this.state.allowEdit ? editBar : null}
            </Navbar>
        )
    }

    render () {
        return (
            <div className="pageContainer">
                <Accordion activeKey = {this.state.key}>
                    <Panel header={this.titleBar("Sunday School")} eventKey={1} onSelect = {this.handleSelect}><SundaySchoolTab activeEdit= {this.state.activeEdit}/></Panel>
                    <Panel header="Bible Studies - Mid Week" eventKey={2} onSelect = {this.handleSelect}><MidWeekBibleStudyTab/></Panel>
                    <Panel header="Together For God" eventKey={3} onSelect = {this.handleSelect}></Panel>
                    <Panel header="Music and Choirs" eventKey={4} onSelect = {this.handleSelect}></Panel>
                    <Panel header="Missions Committee" eventKey={5} onSelect = {this.handleSelect}></Panel>
                    <Panel header="Trail Life USA & American Heritage Girls" eventKey={6} onSelect = {this.handleSelect}></Panel>
                </Accordion>
            </div>
        );
    }
}

export default MinistryPage;