import React from 'react'

const formatTextContainer = (Component) =>
    class extends React.Component {
        buildText (text) {
            return (
                <p>{text}</p>
            );
        };

        render () {
            return (
                <Component {...this.props}>
                    {this.props.text ? this.props.text.map(this.buildText) : null}
                </Component>
            );
        };
    };

export default formatTextContainer;