import React, { Component } from "react";
import { LoginState } from "../app/applicationTypes";
import { Link } from "react-router-dom";
import logoImg from "../assets/toolbox.png";

interface LogoProps {
  loginState: LoginState
}

class Logo extends Component<LogoProps> {

  render() {
    let target = "/";
    if (this.props.loginState == LoginState.LOGGED_IN) {
      target = "/dashboard";
    }
    return (
      <Link
        to={target}
        className="left brand-logo"
      >
        <img src={logoImg} alt="Smiley face" height="42" width="42"/>
      </Link>
    );
  }
}

export default Logo;