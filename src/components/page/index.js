import React from 'react';
import Header from '../header';
import CarouselJS from '../carouselJS';
import Carousel from '../carousel';
import StampJS from '../stampJS';
import Stamp from '../stamp';
import Footer from '../footer';
import Favbar from '../favbar';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favBarList : []
    }
    this.clickfav = this.clickfav.bind(this);
    this.removefav = this.removefav.bind(this);
  }

  clickfav(title, img) {
  let fav = this.state.favBarList;
  let flag = 1;
    for(let i=0; i<fav.length; i++) {
      if(fav[i]["title"] === title){
        flag=0;
      }
    }
    if(flag==1) {
      if(this.state.favBarList.length > 2) {
         this.state.favBarList.splice(0,1);
       }
        this.setState({
          favBarList:
          this.state.favBarList.concat({"title": title, "img": img})
        })
    }
  }

  removefav(title) {
    let fav = this.state.favBarList;
    let pos;
    for(let i=0; i<fav.length; i++) {
      if(fav[i]["title"] === title){
        pos=i;
      }
    }
    this.state.favBarList.splice(pos,1);
    this.setState({
      favBarList:
      this.state.favBarList
    })
  }

  render() {
    const data = this.props.data;
    const imageList = data.imageList;
    const navList = data.navList;
    const carouselImages = data.carouselImages;
    const carouselId = data.carouselId;
    let carousel = <Carousel imageList={carouselImages} />;
    let favouriteTab;
    if (typeof document !== 'undefined') {
      carousel = <CarouselJS imageList={carouselImages} idList={carouselId} />;
      favouriteTab = <Favbar favBarList={this.state.favBarList} favimg={data.favourite} removefav={this.removefav} />;
    }
    return (
      <div>
        <Header logo={data.logo} navList={navList} navright={data.navright} />
        <div className="grid">
          {carousel}
          <div className="row" id="body">
            {imageList.map((item, index) => {
                if (typeof document !== 'undefined') {
                  return(<StampJS key={index} image={item.image} title={item.title} clickfav={this.clickfav} />);
                }
                else {
                  return(<Stamp key={index} image={item.image} title={item.title}  />);
                }
              }
            )}
          </div>
          <div className="row">
            {favouriteTab}
          </div>
          <div className="row" id="footer">
            {data.footer.map((item, index) => <div key={index} className="col-3"><Footer label={item.title} id={item.id} content={item.content} /></div>)}
          </div>
        </div>
        <div className="copy-right">
          {data.copyright}
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default Page;
