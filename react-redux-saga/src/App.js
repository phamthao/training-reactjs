import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Blocked from './components/Blocked';
import Employee from './components/Employee';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {(parseInt(localStorage.getItem('lockTime')) > (new Date()).getTime()) ? <Redirect to='blocked' /> : ''}
          <Switch>
            <Route path='/' exact={true} component={Login} />
            <Route path='/blocked' component={Blocked} />
            <Route path='/employee' component={Employee} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;