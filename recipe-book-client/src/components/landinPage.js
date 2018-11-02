import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import Login from './Login';
import './landingPage.css';

export function LandingPage(props){
    if(props.loggedIn){
        return <Redirect to="/Recipes" />;
    }
    return(
        <div className="landing-page">
        <h2>Welcome to Recipe Book</h2>
        <h4>Please Login to continue</h4>
        <Login />
        <div className="link-div">
        <Link to="/signup"className="signup-link">Signup</Link>
        </div>
        </div>
    );
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);