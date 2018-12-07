import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './Input';
import { login } from '../actions/auth';
import { required, nonEmpty } from './validator';
import './login.css';

export class Login extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }
  render() {
    let error;
    let invalidLoginError;
    if (this.props.error === 'Incorrect username or password') {
      invalidLoginError = (
        <span className="incorrect-login" aria-live="polite">
          {this.props.error}</span>
      );
      console.log('Sreyas ', this.props.error)
    }
    else if (this.props) {
      error = (
        <span className="form-error" aria-live="polite">
          {this.props.error}</span>
      );
    }

    return (
      <div className="login-parent">
        <form className="login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <Field
            id="username"
            component={Input}
            type="text"
            name="username"
            className="user-textbox"
            validate={[required, nonEmpty]}
            placeholder="Enter email"
          /> <br />
          <Field component={Input}
            type="password"
            name="password"
            className="password-field"
            id="password"
            validate={[required, nonEmpty]}
            placeholder="Enter password"
          />  {error}<br />
          <br />
          {invalidLoginError}<br />
          <button className="login-button" disabled={this.props.pristine || this.props.submitting}>login</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
  // onSubmitFail: (error, dispatch) => { if (error) { dispatch(focus('createRecipe', Object.keys(error)[0])) } }
})(Login);
