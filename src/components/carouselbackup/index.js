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
    if (document.getElementById("carousel3").className === "carousel carousel3 visible") {
      id = "carousel3";
    }
    else if (document.getElementById("carousel1").className === "carousel carousel1 visible") {
      id = "carousel1";
    }
    else if (document.getElementById("carousel2").className === "carousel carousel2 visible") {
      id = "carousel2";
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
      if (id === "carousel1") {
        document.getElementById("carousel3").className = "carousel carousel3 visible";
        document.getElementById(id).className = "carousel carousel1";
      }
      if (id === "carousel2") {
        document.getElementById("carousel1").className = "carousel carousel1 visible";
        document.getElementById(id).className = "carousel carousel2";
      }
      if (id === "carousel3") {
        document.getElementById("carousel2").className = "carousel carousel2 visible";
        document.getElementById(id).className = "carousel carousel3";
      }
    }
    if (direction === "right") {
      if (id === "carousel1") {
        document.getElementById("carousel2").className = "carousel carousel2 visible";
        document.getElementById(id).className = "carousel carousel1";
      }
      if (id === "carousel2") {
        document.getElementById("carousel3").className = "carousel carousel3 visible";
        document.getElementById(id).className = "carousel carousel2";
      }
      if (id === "carousel3") {
        document.getElementById("carousel1").className = "carousel carousel1 visible";
        document.getElementById(id).className = "carousel carousel3";
      }
    }
  }
}
  render() {
    return (
      <div className="carousel-wrapper" id="carousel">
        <div className="carousel carousel1" id="carousel1">
          <a href="#" className="arrow arrow-prev" onClick={() => this.clickHandler("carousel1", "left")}></a>
          <img className="carousel-image" src={this.props.imageList[0]} alt="item1" />
          <a href="#" className="arrow arrow-next" onClick={() => this.clickHandler("carousel1", "right")}></a>
        </div>
        <div className="carousel carousel2 visible" id="carousel2">
          <a href="#" className="arrow arrow-prev" onClick={() => this.clickHandler("carousel2", "left")}></a>
          <img className="carousel-image" src={this.props.imageList[1]} alt="item2" />
          <a href="#" className="arrow arrow-next" onClick={() => this.clickHandler("carousel2", "right")}></a>
        </div>
        <div className="carousel carousel3" id="carousel3">
          <a href="#" className="arrow arrow-prev" onClick={() => this.clickHandler("carousel3", "left")}></a>
          <img className="carousel-image" src={this.props.imageList[2]} alt="item3" />
          <a href="#" className="arrow arrow-next" onClick={() => this.clickHandler("carousel3", "right")}></a>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  imageList: React.PropTypes.array.isRequired
};

export default Carousel;
