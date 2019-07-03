import React, { Component } from 'react';
import { LoginForm } from './LoginForm';
import '../../css/app/form.css';
import { connect } from 'react-redux';
import { doLoginUser } from '../../app/actions/appActions';

interface LoginFormContainerDispatch {
  loginUser: (username: string, password: string) => void
}

interface LoginFormContainerCombinedProps extends LoginFormContainerDispatch {

}

class LoginFormContainer extends Component<LoginFormContainerCombinedProps> {
  render() {
    return (
      <div className={'form-container'}>
        <LoginForm loginUser={this.props.loginUser}/>
      </div>
    );
  }
}


const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { loginUser: doLoginUser })(LoginFormContainer);