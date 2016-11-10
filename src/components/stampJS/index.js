import React from 'react';
import Fav from '../fav';

const StampJS = props => (
  <div className="col-3 stamp" onClick={() => props.clickStamp(props.id)}>
    <a href="/" className="stamp-link">
      <span className="stamp-heading">{props.title}</span>
      <img src={props.image} alt={props.title} />
    </a>
    <div className="fav-holder" onClick={() => props.clickfav(props.title, props.image)}>
      <Fav />
    </div>
  </div>
);

StampJS.propTypes = {
  id: React.PropTypes.number.isRequired,
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  clickfav: React.PropTypes.func,
  clickStamp: React.PropTypes.func
};

export default StampJS;
