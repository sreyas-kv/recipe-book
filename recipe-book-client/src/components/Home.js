import React, { Component } from 'react';

import Header from './Header';
import Signup from './Signup';
import Recipes from './Recipes';
import Login from './Login';



class App extends Component {
  render() {

    return (
      <div className="App">
            <Header />
            <Signup />
      </div>
    )
  }
}



export default App;