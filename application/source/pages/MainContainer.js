import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from './HomePage';
import VisitingPage from './VisitingPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import MinistryPage from './MinistryPage';
import LeadershipPage from './LeadershipPage';
import ConnectPage from './ConnectPage';

class MainContainer extends React.Component {

    pageMap = {
        Home: HomePage,
        Visiting: VisitingPage,
        About: AboutPage,
        Photos: PhotosPage,
        Ministry: MinistryPage,
        Leadership: LeadershipPage,
        Connect: ConnectPage,
        Header: Header
    };

    constructor(props) {
        super(props);

        this.state = {
            currentPage: HomePage
        };
    }

    componentWillMount () {}

    componentDidMount () {}

    componentWillUnmount () {}

    render () {
        return ( <Router>
            <div className="base">
                <Header/>
                <Route exact path="/" component={this.pageMap.Home}/>
                <Route path="/visiting" component={this.pageMap.Visiting}/>
                <Route path="/about" component={this.pageMap.About}/>
                <Route path="/photos" component={this.pageMap.Photos}/>
                <Route path="/ministry" component={this.pageMap.Ministry}/>
                <Route path="/leadership" component={this.pageMap.Leadership}/>
                <Route path="/connect" component={this.pageMap.Connect}/>
            </div>
        </Router>);
    }
}

export default MainContainer;

