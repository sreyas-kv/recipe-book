import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Header from './Header';
// import SignupForm from './SignupForm';
import Recipes from './Recipes';
import LandingPage from './landinPage';
import SignupPage from './singup-page';
import { refreshAuthToken } from '../actions/auth';

export class App extends React.Component {
  componentDidUpdate(prevProps){
    if(!prevProps.loggedIn && this.props.loggedIn){
      this.startPeriodicRefresh();
    } else if(prevProps.loggedIn && !this.props.loggedIn){
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount(){
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh(){
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000
    );
  }

  stopPeriodicRefresh() {
    if(!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }
  
  render() {

    return (
      <div className="App">
            <Header />
            {/* <Recipes /> */}
            <Route exact path="/" component={LandingPage} />
            <Route exact path='/signup' component={SignupPage} />
            <Route exact path='/recipes' component={Recipes} />

            {/* <SignupPage /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));