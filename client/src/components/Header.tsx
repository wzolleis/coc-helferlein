import * as React from "react";
import { connect } from "react-redux";
import { AppState, LoginState, UserModel } from "../app/applicationTypes";

export interface HeaderProps {
  loginState: LoginState,
  user?: UserModel
}

const LoggedOut = () => {
  return (
    <a href={"/auth/google"}>Login with Google</a>
  );
};

const InProgress = () => {
  return null;
};

const LoggedIn = () => {
  return (
    <a href={"/api/logout"}>Logout</a>
  );
};


export class Header extends React.Component<HeaderProps> {
  renderContend(): React.ReactFragment {
    if (this.props.loginState == LoginState.UNDEFINED) {
      return <InProgress/>;
    }
    if (this.props.loginState == LoginState.LOGGED_OUT) {
      return (<LoggedOut/>);
    }

    return <LoggedIn/>;
  }

  public render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="left brand-logo">Coc Helferlein</a>
          <ul className="right">
            <li>{this.renderContend()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }: AppState): HeaderProps => {
  const { loginState, user } = auth;
  return {
    loginState: loginState,
    user
  };
};

export default connect(mapStateToProps)(Header);