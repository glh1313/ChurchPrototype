import React from 'react'

const centerInDivContainer = (Component) =>
    class extends React.Component {
        render () {
            return (
                <div className="centerContainer">
                    <div style={{width: "auto"}}/><Component {...this.props}/><div style={{width: "auto"}}/>
                </div>
            );
        }
    };

export default centerInDivContainer;