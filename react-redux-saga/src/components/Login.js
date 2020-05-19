import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUserAction } from '../actions/login';

class Login extends Component {
 
    componentDidMount() {
        document.title = 'Login';
    }

    onHandleLogin = (event) => {
        event.preventDefault();

        const data = {
          id: event.target.id.value,
          password: event.target.password.value
        };
        
        this.props.loginUserAction(data);
    }
  
    render() {
        let isSuccess, message;
        
        if (this.props.hasOwnProperty('login')) {
            isSuccess = this.props.login.login;
            message = this.props.login.message;
        }

        return (
            <div>
                <h3>Login Page</h3>
                {!isSuccess ? <div>{message}</div> : <Redirect to='employee' />}
                <form onSubmit={this.onHandleLogin}>
                    <div>
                        <label htmlFor="id">Employee ID</label>
                        <input type="text" name="id" id="id" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
    return {
        login: state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUserAction: (data) => {
            dispatch(loginUserAction(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);