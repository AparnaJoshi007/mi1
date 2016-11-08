import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Favbar = props => {
  if(props.favBarList.length == 0) {
    return (
        <div className="favbar-no">
          <img className="fav-no-img" src={props.favimg} alt="favimage" />
          <h3 className="fav-no-heading">You have no favourites</h3>
        </div>
    );
  }
  else {
    return (
      <div className="favourites">
        <div className="col-3">
          <h3 className="fav-heading">Favourites</h3>
          <img className="favbar-img" src={props.favimg} alt="favimage" />
        </div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        {props.favBarList.map((item, index) =>
          <div key={index} className="col-3">
            <div className="favourite-holder">
              <span className="fav-name">{item.title}</span>
              <img src={item.img} alt={item.title} />
              <button className="remove-icon" onClick={() => props.removefav(item.title)}></button>
            </div>
          </div>
        )}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Favbar.propTypes = {
  favBarList: React.PropTypes.array.isRequired,
  favimg: React.PropTypes.string.isRequired,
  removefav: React.PropTypes.func.isRequired
};

export default Favbar;
