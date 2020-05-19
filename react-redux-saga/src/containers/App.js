import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Employee from '../components/Employee';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact={true} component={Login} />
            <Route path='/login' component={Login} />
            <Route path='/employee' component={Employee} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;