import React from 'react';
import { ButtonGroup, Button} from 'react-bootstrap';


class MainMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.history = props.history;
        this.handleMenuChange = this.handleMenuChange.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        console.log('Got new props');
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    handleMenuChange (event) {
        if (event.target.id === "home") {
            this.history.push("/");
        } else
            this.history.push("/" + event.target.id);
    }

    render () {
        return mainMenuInstance(this);
    }
}

const createButtons = (handler) => {
    let buttons = ["Home", "Visiting", "About", "Photos", "Ministry", "Leadership", "Connect"];

    function createButton (name) {
        return <Button className="mainMenuButton" onClick={handler} key={name} id={name.toLowerCase()}>{name}</Button>
    }

    return buttons.map(createButton);
};

const mainMenuInstance = (props) => (
    <ButtonGroup className="mainMenu">
        {createButtons(props.handleMenuChange)}
    </ButtonGroup>
);

export default MainMenu;