const URL = 'http://localhost:3000/';
let img1;
let img2;
const mySteps = function() {

  this.Given(/^I am on home page$/, function(callback) {
    return this.visit(URL, callback);
  });

  this.Then(/^I should see "(.*)" as the page title$/, function(title, callback) {
    const pageTitle = this.getTitle('title');
    if (title === pageTitle) {
      callback();
    } else {
      callback(new Error("Expected to be on page with title " + title));
    }
  });

  this.Given(/^I have carousel in homepage$/, function(callback) {
    return this.visit(URL, callback);
  });

  this.When(/^I click on a link in carousel$/, function(callback) {
    img1 = this.getImg(callback);
    return this.clickLink(callback);
  });

  this.Then(/^Carousel image should change$/, function(callback) {
    img2 = this.getImg(callback);
    if (img1 !== img2) {
      callback();
    } else {
      callback(new Error("Expected to have different image " + img2));
    }
  });
};

module.exports = mySteps;
