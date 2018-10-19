import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { createUser } from '../actions/actions';
import {login} from '../actions/auth';

import Input from './SignupInput';
import { required, nonEmpty, matches, length, isTrimmed } from './validator';

const passwordLength = length({ min: 6, max: 72 });
const matchesPassword = matches('password');

export class SignupForm extends React.Component {
  //   return fetch('http://localhost:8080/signup'
  onSubmit(values) {
    const { email, password, firstname, lastname } = values;
    const user = { email, password, firstname, lastname };
    return this.props.dispatch(createUser(user))
      .then(() => this.props.dispatch(login(email, password)));
  }
  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values))}>
          <label htmlFor="firstName">First name</label>
          <Field component={Input} type="text" name="firstName" />
          <label htmlFor="last-name">Last name</label>
          <Field component={Input} type="text" name="lstName" />
          <label htmlFor="email-address">Email Address</label>
          <Field component={Input} type="email" name="email" 
          validate={[required, nonEmpty, isTrimmed]} />
          <label htmlFor="password">Password</label>
          <Field component={Input} type="password" name="password"
          validate={[required, passwordLength, isTrimmed]} />
          <label htmlFor="passwordConfirm">Confirm password</label>
          <Field component={Input} type="password" name="passwordConfirm"
          validate={[required, nonEmpty, matchesPassword]} />
          <button type="submit" disabled={this.props.pristine || this.props.submitting}>Signup</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) => 
  dispatch(focus('registration', Object.keys(errors)[0]))
})(SignupForm);