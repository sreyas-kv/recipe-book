import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import SignupForm from './SignupForm';

export function SignupPage(props){
    if(props.loggedIn){
        return <Redirect to='/Recipes' />;
    }
    return (
        <div className="home">
        <h2>sign up here</h2>
        <SignupForm />
        <Link to="/">login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignupPage);