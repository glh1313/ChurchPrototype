import React from 'react';
import { Media, Navbar, Button, Glyphicon } from 'react-bootstrap';
import shortId from 'shortid';

const createText = (text) => {
    return <p key={shortId.generate()}>{text}</p>
};

const editBar = (rowData, showButtonObject) => (
    <Navbar fluid >
        <Navbar.Header>
            <Navbar.Text>Edit Book: {rowData.title}</Navbar.Text>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Navbar.Form pullRight>
                <Button bsClass = "editButtons"><Glyphicon glyph="pencil"/></Button>
                {showButtonObject.upButton ? <Button bsClass = "editButtons"><Glyphicon glyph="arrow-up"/></Button> : null}
                {showButtonObject.downButton ? <Button bsClass = "editButtons"><Glyphicon glyph="arrow-down"/></Button> : null}
                <Button bsClass = "editButtons"><Glyphicon glyph="remove"/></Button>
            </Navbar.Form>
        </Navbar.Collapse>
    </Navbar>
);

const createClass = (rows, activeEdit) => {
    const returnValue = <div>There currently aren't any events.</div>;

    const createRow = (rowData, showButtonObject) => {
        return (
            <div key={shortId.generate()}>
                {activeEdit ? editBar(rowData, showButtonObject) : null}
                <Media >
                    <Media.Left align="top">
                        <img width={144} height={216} src={rowData.imageURL}/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>{rowData.title}</Media.Heading>
                        <h5>{rowData.author}</h5>
                        {rowData.text.map(createText)}
                    </Media.Body>
                </Media>
            </div>
        );
    };

    const prepRows = (rowdata, index) => {
        const showButtonObject = {
            upButton: (index !== 0),
            downButton: (index !== rows.length - 1)
        };

        return createRow(rowdata, showButtonObject);
    };

    if (rows && rows.length) {
        return rows.map(prepRows);
    }

    return returnValue;
};

export default createClass;