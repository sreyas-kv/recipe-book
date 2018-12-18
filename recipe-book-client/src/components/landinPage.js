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
        <div className="landing-parent">
            <div className="landing-page">
                <h2 className="welcome-note">be your own masterchef</h2>
                <div className="login-screen">
                    <Login />
                    <div className="link-div">
                        <span className="signup-span">New here? <Link to="/signup" className="signup-link">Signup!</Link>
                        </span>
                    </div>
                </div>
                {/* <div className="demo-account">
                    <span className="demo-p1">Demo Account: </span>
                    <span className="demo-p1">user:firstuser@gmail.com </span>
                    <span className="demo-p2">password:firstuser123</span>
                </div> */}
            </div>
        </div>
    );
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);