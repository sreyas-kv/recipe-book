import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export default () => Component => {
    function RequiresLogin(props) {
        const {authenticating, logedIn, error, ...passThroughProps} = props;
        if(authenticating){
            return <div>Loggin in...</div>;
        } else if(!loggedIn || error){
            return <Redierct to="/" />;
        }
        return <Component {...pasThroughProps} />;
    }

    const displayName = Component.displayName || Component.name || 'Component';
    RequiresLogin.displayName = `RequiresLogin(${displayName})`;
    
    const mapStateToProps = (state, props) => ({
        authenticating: stte.auth.loading,
        loggedIn: state.auth.currentUser != null,
        error: state.auth.error
    });
    return connect(mapStateToProps)(RequiresLogin);
}