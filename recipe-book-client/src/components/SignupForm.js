import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './Input';
import { required, nonEmpty, matches, length, isTrimmed } from './validator';

const passwordLength = length({ min: 6, max: 72 });
const matchesPassword = matches('password');

export class SignupForm extends React.Component {
    onSubmit(values) {
        const { username, password, firstName, lastName } = values;
        const user = { username, password, firstName, lastName };
        return this.props.dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }
    render() {
        return (
            <form
                className="signup-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <Field
                    component={Input}
                    type="text"
                    className="firstName"
                    name="firstName"
                    placeholder="First name"
                /> <br />
                <Field
                    component={Input}
                    type="text"
                    className="lastName"
                    name="lastName"
                    placeholder="Last name" 
                    /> <br />
                <Field
                    component={Input}
                    type="text"
                    className="userName"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                    placeholder="Email"
                /> <br />
                <Field
                    component={Input}
                    type="password"
                    className="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                    placeholder="Password"
                /> <br />
                <Field
                    component={Input}
                    type="password"
                    className="passwordConfirm"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                    placeholder="Confirm password"
                /> <br /> <br />
                <button
                    type="submit"
                    className="signup-submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button> <br />
            </form>
        );
    }
}

export default reduxForm({
    form: 'signup',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('signup', Object.keys(errors)[0]))
})(SignupForm);
