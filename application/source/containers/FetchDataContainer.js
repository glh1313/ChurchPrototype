import axios from 'axios';
import React from 'react';
import Contrib from 'asynquence-contrib/contrib';
import ASQ_parent from 'asynquence/asq';
const ASQ = Contrib(ASQ_parent);


const fetchDataContainer = (dataDependsFn) => (Component) =>
    class extends React.Component {
        state = {
            isLoading: true,
            data: {}
        };

        componentDidMount() {
            const dependents = dataDependsFn(this.props);

            const fetch = (done, dependObject, key) => {
                let returnObject = {};
                axios.get(dependObject[key]).then(response => {
                    returnObject[key] = response.data;
                    done(returnObject);
                });
            };

            const buildDataObject = (done, data) => {
                let returnObject = {};
                data.forEach(item => {
                    Object.assign(returnObject, item);
                });

                done(returnObject);
            };


            const sendData = (done, data) => {
                this.setState({
                    data: data,
                    isLoading: false
                });
            };

            ASQ(Object.keys(dependents))
                .map((key, done) => fetch(done, dependents, key))
                .then(buildDataObject)
                .then(sendData);
        }

        render() {
            const { isLoading, data } = this.state;
            return <Component {...this.props} {...data} {...isLoading}/>;
        }
    };

export default fetchDataContainer;