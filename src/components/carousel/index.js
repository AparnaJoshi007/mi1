import React from 'react';

const Carousel = props => (
  <div className="carousel-wrapper-no-js">
    {props.imageList.map((item, index) =>
      <div key={index} >
        <span id={`target-item-${index + 1}`} />
        <div className={`carousel-item-no-js item-${index + 1}`}>
          <a className="arrow-no-js arrow-no-js-prev" href={`#target-item-${((index - 1 < 0) ? 3 : index)}`} />
          <img src={item} className="carousel-image-no-js" alt={item} />
          <a className="arrow-no-js arrow-no-js-next" href={`#target-item-${((index + 2) > 3 ? 1 : index + 2)}`} />
        </div>
      </div>
    )}

  </div>
    );
Carousel.propTypes = {
  imageList: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};
export default Carousel;
