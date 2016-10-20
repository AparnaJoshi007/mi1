import React from 'react';

const Footer = (props) => (
  <div className="footer">
    <input type="checkbox" className="footer-checkbox" id={"footerCheckBox"+props.id} />
    <div className="footer-wrapper">
      <label htmlFor={"footerCheckBox"+props.id} className="footer-heading">{props.label}
        <span className="footer-icon"><i className="footer-icon-link"></i></span>
      </label>
    </div>
    <ul className="footer-holder" id={"footerLink"+props.id}>
      {props.content.map((item, index) => <li key = {index} className="footer-item"><a className="footer-link" href="#">{item}</a></li>)}
    </ul>
  </div>
);

Footer.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  content: React.PropTypes.array.isRequired
}

export default Footer;
