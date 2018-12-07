import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Login from './Login';
import './landingPage.css';

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/Recipes" />;
    }
    return (
        <div className="landing-page">
            <h2 className="welcome-note">be your own masterchef</h2>
            <div className="login-screen">
                <Login /> <br />
                <div className="link-div">
                    <span className="signup-span">Don't have account? <Link to="/signup" className="signup-link">Signup</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);