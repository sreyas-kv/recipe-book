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
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}</div>
      );
    }

    return (
      <div className="login-parent">
        <form className="login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {error}
        <div className="inner-div">
        <div className="username-div">
          {/* <label htmlFor="login-email" className="username-lable"><span className="login-span">e-mail</span></label> */}
          <Field id="username" component={Input} type="text" name="username" className="user-textbox" validate={[required, nonEmpty]} label="email"/>
          {/* <label htmlFor="password">Password</label> */}
          </div>
          <Field component={Input} type="password" name="password" id="password" validate={[required, nonEmpty]} label="password"/>
          <button className="login-button" disabled={this.props.pristine || this.props.submitting}>login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Login);
