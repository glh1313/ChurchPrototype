import axios from 'axios';
import React from 'react';
import Contrib from 'asynquence-contrib/contrib';
import ASQ_parent from 'asynquence/asq';
const ASQ = Contrib(ASQ_parent);


const postDataContainer = (dataDependsURI) => (Component) =>
    class extends React.Component {
        state = {
            isSending: false,
            response: undefined
        };

        postData (data) {
            const sendData = (done, data) => {
                axios.post(dataDependsURI, data).then(response => {
                    done(response);
                });

                this.setState({
                    isSending: true
                });
            };

            const composeResponse = (done, response) => {

            };

            ASQ(data).then(sendData)
                .then(composeResponse);
        }

        render() {
            const { isSending, response } = this.state;
            return <Component {...this.props} {...response} {...isSending} postData = {this.postData}/>;
        }
    };

export default postDataContainer;