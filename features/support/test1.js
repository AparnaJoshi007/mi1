import Zombie from 'zombie';
const browser = new Zombie();
// browser, visit will be available in the step definition
function World() {
  this.browser = browser;

  this.visit = function (url, callback) {
    this.browser.visit(url, callback);
  };

  this.getTitle = function (title, callback) {
    return this.browser.text(title, callback);
  }

  this.clickLink = function(callback) {
    if(this.browser.document.getElementById('carousel1').className === "carousel carousel1 visible")
      this.browser.document.getElementById('left1').click();
    else if(this.browser.document.getElementById('carousel2').className === "carousel carousel2 visible")
      this.browser.document.getElementById('left2').click();
    else if(this.browser.document.getElementById('carousel3').className === "carousel carousel3 visible")
      this.browser.document.getElementById('left3').click();
    callback();
  };

  this.getUrl = function(callback) {
    return this.browser.location.href;
  };

  this.getImg = function(callback) {
      let img1 = this.browser.document.getElementById('carouselImg1').className;
      let img2 = this.browser.document.getElementById('carouselImg2').className;
      let img3 = this.browser.document.getElementById('carouselImg1').className;
      if(img1 === "carousel-image displayed")
        return this.browser.document.getElementById('carouselImg1').getAttribute('src');
      else if(img2 === "carousel-image displayed")
        return this.browser.document.getElementById('carouselImg2').getAttribute('src');
      else if(img3 === "carousel-image displayed")
        return this.browser.document.getElementById('carouselImg3').getAttribute('src');
  };
}

module.exports = function () {
  this.World = World;
};
