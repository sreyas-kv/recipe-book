import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import SignupForm from './SignupForm';

import './signup-page.css';

export function SignupPage(props) {
    if (props.loggedIn) {
        return <Redirect to='/Recipes' />;
    }
    return (
        <div className="signup-container">
            <div className="signup-white-div">
                <h2 className="signup-h2">sign up here</h2>
                <div className="signup-div">
                    <SignupForm />
                   <span className="login-span">Already have account?<Link to="/" className="login-link"> login</Link></span>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignupPage);