import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Login extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <form>
          <label>User Name: </label>
          <input type="text" value="Enter user name"></input><br />
          <label>Password</label>
          <input type="password" value="Enter password"></input><br /><br />
          <input type="submit"value="SignIn"></input>
          <input type="button"value="Cancel"></input>
        </form>
      </div>
    )
  }
}
export default Login;
