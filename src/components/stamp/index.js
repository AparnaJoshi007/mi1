import React from 'react';
import Fav from '../fav';

const Stamp = props => (
  <div className="col-3 stamp">
    <a href="/" className="stamp-link">
      <span className="stamp-heading">{props.title}</span>
      <img src={props.image} alt={props.title} />
    </a>
    <div className="fav-holder" onClick={() => props.clickfav(props.title, props.image)}>
      <Fav />
    </div>
  </div>
);

Stamp.propTypes = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  clickfav: React.PropTypes.func.isRequired
};

export default Stamp;
