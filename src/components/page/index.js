import React from 'react';
import Header from '../header';
import Carousel from '../carousel';
import Body from '../body';
import Footer from '../footer';

class Page extends React.Component {
  render() {
    const data = this.props.data;
    const imageList = data.imageList;
    const navList = data.navList;
    const carouselImages = data.carouselImages;
    const carouselId = data.carouselId;
    return (
      <div>
        <Header logo={data.logo} navList={navList} navright={data.navright} />
        <div className="grid">
          <Carousel imageList={carouselImages} idList={carouselId}/>
          <div className="row" id="body">
            {imageList.map((item, index) => <Body key={index} image={item.image} title={item.title} />)}
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
