import React from 'react';

let xDown = null;
let yDown = null;
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
  }

  componentDidMount() {
    const ele = document.getElementById('carousel');
    ele.addEventListener('touchstart', this.handleTouchStart, false);
    ele.addEventListener('touchmove', this.handleTouchMove, false);
  }

  handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  }

  handleTouchMove(evt) {
    let id;
    if (document.getElementById(this.props.idList[2]).className === "carousel carousel3 visible") {
      id = this.props.idList[2];
    }
    else if (document.getElementById(this.props.idList[0]).className === "carousel carousel1 visible") {
      id = this.props.idList[0];
    }
    else if (document.getElementById(this.props.idList[1]).className === "carousel carousel2 visible") {
      id = this.props.idList[1];
    }
    if (!xDown || !yDown) {
        return;
    }
    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;
    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          this.clickHandler(id, "right");
        } else {
          this.clickHandler(id, "left");
        }
    }

    xDown = null;
    yDown = null;
}

  clickHandler(id, direction) {
    if (typeof document !== 'undefined') {
    if (direction === "left") {
      for(let i = 0; i < 3; i++) {
        if (id === this.props.idList[i]) {
          document.getElementById(this.props.idList[((i-1) < 0) ? '2' : i-1]).className = `carousel carousel${(((i-1) < 0) ? '3' : i)} visible`;
          document.getElementById(`carouselImg${(((i-1) < 0) ? '3' : i)}`).className = "carousel-image displayed";
          document.getElementById(id).className = `carousel carousel${i+1}`;
          document.getElementById(`carouselImg${i+1}`).className = "carousel-image";
        }
      }
    }
    if (direction === "right") {
      for(let i = 0; i < 3; i++) {
        if (id === this.props.idList[i]) {
          document.getElementById(this.props.idList[((i+1) > 2) ? '0' : i+1]).className = `carousel carousel${(((i+1) > 2) ? '1' : i+2)} visible`;
          document.getElementById(`carouselImg${(((i+1) > 2) ? '1' : i+2)}`).className = "carousel-image displayed";
          document.getElementById(id).className = `carousel carousel${i+1}`;
          document.getElementById(`carouselImg${i+1}`).className = "carousel-image";
        }
      }
    }
  }
}

  render() {
    return (
      <div className="carousel-wrapper" id="carousel">
      {this.props.imageList.map((item, index) =>
        <div key={index} className={`carousel carousel${((index === 1) ? '2 visible' : index+1)}`} id={this.props.idList[index]}>
          <a href="#" id={`left${index + 1}`} className="arrow arrow-prev" onClick={() => this.clickHandler(this.props.idList[index], "left")}></a>
          <img className={`carousel-image${((index === 1) ? ' displayed' : '')}`} id={`carouselImg${index + 1}`} src={item} alt={`item${index + 1}`} />
          <a href="#" id={`right${index + 1}`} className="arrow arrow-next" onClick={() => this.clickHandler(this.props.idList[index], "right")}></a>
        </div>
      )}
      </div>
    );
  }
}

Carousel.propTypes = {
  imageList: React.PropTypes.array.isRequired
};

export default Carousel;
