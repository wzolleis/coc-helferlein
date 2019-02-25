import * as React from "react";

export interface HeaderProps {
}

export class Header extends React.Component<HeaderProps> {
  public render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="left brand-logo">Coc Helferlein</a>
          <ul className="right">
            <li>
              <a>Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
