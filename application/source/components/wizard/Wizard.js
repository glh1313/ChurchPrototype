import React from 'react';
import { Button, ButtonToolbar } from "react-bootstrap";

class Wizard extends React.Component {
    constructor(props) {
        super(props);
        //TODO: Make data immutable and needed to be set my setData
        //TODO: Allow for step naming and setup
        //TODO: If no step key passed in auto assign
        //TODO: Allow for a Promise or a callback to be triggered when submit is hit (maybe observables)
        //TODO: Remove Back button when we are on the first page.\

        this.steps = [];
        this.lastStep = 0;
        this.wizardData = {};

        this.previousStep = this.previousStep.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.setData = this.setData.bind(this);
        this.submit = this.submit.bind(this);

        this.state = {
            currentStep: 0
        };
    }

    buildDataObject (dataObject, keys) {
        if (dataObject && keys) {
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                this.wizardData[key] = dataObject[key];
            }
        }
    }

    setData (dataObject) {
        if (dataObject) {
            let keys = Object.keys(dataObject);
            this.buildDataObject(dataObject, keys);
        }
    }

    setupButtons () {
        let previousButton = (this.state.currentStep > 0) ? (<Button onClick = {this.previousStep}>Back</Button>) : null;
        let nextButton = (this.state.currentStep === this.lastStep) ? (<Button onClick = {this.submit}>Submit</Button>) : (<Button onClick = {this.nextStep}>Forward</Button>);
        return (<div>{previousButton}<span/>{nextButton}</div>)
    }

    parseSteps (wizardChildren) {
        if (wizardChildren && wizardChildren.length) {
            this.lastStep = wizardChildren.length - 1;
            this.steps =  wizardChildren;
        }
    }

    previousStep () {
        if (this.state.currentStep > 0) {
            this.setState({
                currentStep: this.state.currentStep - 1
            });
        }
    }

    nextStep () {
        if (this.state.currentStep < this.lastStep) {
            this.setState({
                currentStep: this.state.currentStep + 1
            });
        }
    }

    submit () {
        this.props.submitCallback(this.wizardData);
        console.log('We submitted check data');
    }

    componentWillMount () {
        this.parseSteps(this.props.children || []);
    }

    componentDidMount () {}

    componentWillUnmount () {}

    render () {
        return (
            <div>
                <div>{this.steps[this.state.currentStep]}</div>
                <ButtonToolbar>{this.setupButtons()}</ButtonToolbar>
            </div>
        )
    }
}

export default Wizard;