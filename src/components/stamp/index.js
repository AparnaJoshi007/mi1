import React from 'react';

const Stamp = props => (
  <div className="col-3 stamp">
    <a href="/" className="stamp-link">
      <span className="stamp-heading">{props.title}</span>
      <img src={props.image} alt={props.title} />
    </a>
  </div>
);

Stamp.propTypes = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
};

export default Stamp;
