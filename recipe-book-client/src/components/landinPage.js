import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import Login from './Login';

export function LandingPage(props){
    if(props.loggedIn){
        return <Redirect to="/Recipes" />;
    }
    return(
        <div className="home">
        <h2>Welcome to Recipes Book</h2>
        <Login />
        <Link to="/signup">Singup</Link>

        </div>
    );
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);