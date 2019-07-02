import React, { Component } from 'react';
import { LoginForm } from './LoginForm';
import '../../css/app/form.css';

class LoginFormContainer extends Component {
  render() {
    return (
      <div className={'form-container'}>
        <LoginForm/>
      </div>
    );
  }
}

export default LoginFormContainer;