import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-left">

        <Link to="/home">
          <img src="assets/icon.svg" alt="Brand" className="brand-logo" />
        </Link>

      </div>
      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <SignInMenuLink to="/signin" label="Sign in" />
        </div>
        {/* <ul className="uk-navbar-nav">
          <li className="uk-active"><a href="#">Active</a></li>
          <li>
            <a href="#">Parent</a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li className="uk-active"><a href="#">Active</a></li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
              </ul>
            </div>
          </li>
          <li><a href="#">Item</a></li>
        </ul> */}

      </div>
    </nav>
  );
};

export default NavBar;

interface LinkProps {
  label: string;
  to: string;
  activeOnlyWhenExact?: boolean;
}

function SignInMenuLink({ label, to, activeOnlyWhenExact }: LinkProps) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <Link to={to}>
      <button className={`uk-button ${match ? "uk-button-primary" : "uk-button-default"}`}>
        {label}
      </button>
    </Link>
  );
}