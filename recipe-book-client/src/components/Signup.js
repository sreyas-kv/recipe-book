import React, { Component } from 'react'


export default class Signup extends Component {

  render() {
    return (
      
    
      <div>
        <form>
            <label>First Name: </label>
            <input type="text" value="Enter First Name"></input><br />
            <label>Last Name: </label>
            <input type="text" value="Enter Last Name"></input><br />
            <label>Email: </label>
            <input type="text" value="Enter Email address"></input><br /><br />
            <input type="submit" value="Sign up"></input>
            <input type="button" value="Cancel"></input>
        </form>
      </div>
    )
  }
}
