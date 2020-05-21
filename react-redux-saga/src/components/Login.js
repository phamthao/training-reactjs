import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginAction, cancelLoginAction } from '../state/actions/login';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
    };
  }

  componentDidMount() {
    document.title = 'Login';
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.message === this.state.message) {
      this.setState({ ...this.state, message: this.props.message });
    }
  }


    onHandleLogin = (event) => {
      event.preventDefault();

      this.setState({ ...this.state, message: 'Loading...' });

      const data = {
        id: event.target.id.value,
        userId: event.target.userId.value,
      };

      this.props.loginAction(data);
    }

    cancelLoginAction = (event) => {
      this.props.cancelLoginAction();
    }

    render() {
      return (
        <div>
          {this.props.failNumber === 3 ? <Redirect to="blocked" /> : ''}
          <h3>Login Page</h3>
          {this.props.isLogged ? <Redirect to="employee" /> : <div>{this.state.message}</div>}
          <form onSubmit={this.onHandleLogin}>
            <div>
              <label htmlFor="id">ID</label>
              <input type="text" name="id" id="id" />
            </div>
            <div>
              <label htmlFor="userId">UserId</label>
              <input type="text" name="userId" id="userId" />
            </div>
            <div>
              <button type="submit">Login</button>
              <button type="button" onClick={this.cancelLoginAction}>Cancel</button>
            </div>
          </form>
        </div>
      );
    }
}

const mapStateToProps = (state) => ({
  isLogged: state.login.login,
  message: state.login.message,
  failNumber: state.login.failNumber,
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: (data) => {
    dispatch(loginAction(data));
  },
  cancelLoginAction: () => {
    dispatch(cancelLoginAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
