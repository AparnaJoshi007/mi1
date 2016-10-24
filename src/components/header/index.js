import React from 'react';

const Header = props => (
  <div>
    <nav className="navbar">
      <span className="navbar-logo"><a className="navbar-logo-link" href="/">{props.logo}</a></span>
      <input type="checkbox" aria-label="navBar" className="navbar-checkbox" id="navBarCheckBox" />
      <label htmlFor="navBarCheckBox" className="icon"><span aria-hidden="true"><i className="navbar-icon-link" /></span></label>
      <ul className="navbar-holder" id="navBar">
        {props.navList.map((item, index) => <li key={index} className="navbar-item"><a className="navbar-link" href="/">{item}</a></li>)}
        <li className="navbar-right"><a className="navbar-right-link" href="/">{props.navright}</a></li>
      </ul>
    </nav>
  </div>
);

Header.propTypes = {
  logo: React.PropTypes.string.isRequired,
  navright: React.PropTypes.string.isRequired,
  navList: React.PropTypes.array.isRequired
};

export default Header;
