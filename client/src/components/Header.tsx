import * as React from 'react';
import { connect } from 'react-redux';
import { AppState, LoginState, UserModel } from '../app/applicationTypes';
import { Link } from 'react-router-dom';
import logoImg from '../assets/toolbox.png';
import { AppLinks } from '../app/AppLinks';

export interface HeaderProps {
  loginState: LoginState;
  user?: UserModel;
}

export class Header extends React.Component<HeaderProps> {
  renderLoginState(): React.ReactFragment | null {
    if (this.props.loginState == LoginState.UNDEFINED) {
      return null;
    }
    if (this.props.loginState == LoginState.LOGGED_OUT) {
      return (
        <a className='nav-link' href={'/auth/google'}>
          Login with Google
        </a>
      );
    }

    return (
      <a className='nav-link' href={'/api/logout'}>
        Logout
      </a>
    );
  }

  renderLogo(): React.ReactFragment {
    const target = this.props.loginState == LoginState.LOGGED_IN ? AppLinks.DASHBOARD : AppLinks.LANDING;

    return (
      <Link to={target} className='left brand-logo'>
        <img src={logoImg as any} alt='Smiley face' height='42' width='42'/>
      </Link>
    );
  }

  public render() {
    /*
      Beispiel fuer weitere Menueintraege
      wird oberhalb der ersten ul eingefuegt

      <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="//codeply.com">Codeply</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#myAlert" data-toggle="collapse">Link</a>
          </li>
        </ul>
     */
    return (
      <nav className='navbar navbar-expand-md navbar-dark bg-primary'>
        {this.renderLogo()}
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#collapsingNavbar'
        >
          <span className='navbar-toggler-icon'/>
        </button>
        <div className='navbar-collapse collapse' id='collapsingNavbar'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>{this.renderLoginState()}</li>
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
