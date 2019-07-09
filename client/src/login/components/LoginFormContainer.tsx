import React, { Component } from 'react';
import { LoginForm } from './LoginForm';
import '../../css/app/form.css';
import { connect } from 'react-redux';
import { doLoginUser } from '../../app/actions/appActions';
import { AppState, LoginState } from '../../app/applicationTypes';
import { RouteComponentProps, withRouter } from 'react-router';
import { AppLinks } from '../../app/AppLinks';

interface LoginFormContainerDispatch {
  loginUser: (username: string, password: string) => void
}

interface LoginFormContainerProps {
  loginState: LoginState
}

interface LoginFormContainerCombinedProps extends LoginFormContainerProps, LoginFormContainerDispatch, RouteComponentProps<any> {

}

class LoginFormContainer extends Component<LoginFormContainerCombinedProps> {
  render() {
    if (this.props.loginState === LoginState.LOGGED_IN) {
      this.props.history.push(AppLinks.TEAM_MANAGEMENT);
    }
    return (
      <div className={'form-container'}>
        <LoginForm loginUser={this.props.loginUser}/>
      </div>
    );
  }
}


const mapStateToProps = ({ auth }: AppState) => {
  return {
    loginState: auth.loginState
  };
};

export default withRouter(connect(mapStateToProps, { loginUser: doLoginUser })(LoginFormContainer));