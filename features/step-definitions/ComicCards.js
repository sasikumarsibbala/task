const { Given, When, Then } = require('@cucumber/cucumber');
const { assert } = require('chai');
var before_location='';

Given("open url{string}",(url) => {
    browser.url(url);
    browser.maximizeWindow();    
});

When("Scroll to the element {string}",(locator)=>{
    var  scroll=$(locator);
    scroll.scrollIntoView();
});

When("i save the position of element {string}",(locator)=>{
  var  comic_card=$(locator);
    before_location=Number(comic_card.getLocation('y'));
    console.log("the position before hovering is ",before_location);
});

When("I  hover on the element {string}",(locator)=>{
     var comic_card=$(locator);
    
    comic_card.moveTo();
});

Then("I expect the elements {string} position  is not equal to  the saved position",(locator)=>{
    var comic_card=$(locator);
    var after_location=Number(comic_card.getLocation('y'));
    console.log("the position after hovering is ",after_location);
    assert.ok(before_location > after_location);
});