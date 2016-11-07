import React from 'react';

const Favbar = props => {
  if(props.favBarList.length == 0) {
    return (
        <div className="favbar-no">
          <img className="fav-no-img" src={props.favimg} />
          <h3 className="fav-no-heading">You have no favourites</h3>
        </div>
    );
  }
  else {
    return (
      <div className="favourites">
        <div className="col-3">
          <h3 className="fav-heading">Favourites</h3>
          <img className="favbar-img" src={props.favimg} />
        </div>
        {props.favBarList.map((item, index) =>
          <div key={index} className="col-3">
            <div className="favourite-holder">
              <span className="fav-name">{item.title}</span>
              <img src={item.img} alt={item.title} />
              <button className="remove-icon" onClick={() => props.favremove(item.title)}></button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Favbar.propTypes = {
  favBarList: React.PropTypes.array.isRequired,
  favimg: React.PropTypes.string.isRequired,
  favremove: React.PropTypes.func.isRequired
};

export default Favbar;
