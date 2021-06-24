const { Given, When, Then } = require('@cucumber/cucumber');
const { assert } = require('chai');
var before_location='';

Given("open url{string}",(link) => {
    link="./explore";
    browser.url(link);
    browser.maximizeWindow();    
});

When("Scroll to the element {string}",(scroll)=>{
    scroll=$("//h3[contains(text(),'Comic Events')]");
    scroll.scrollIntoView();
});

When("i save the position of element {string}",(comic_card)=>{
    comic_card=$("(//img[@class='card-thumb-frame__thumbnail img__blur'])[1]");
    before_location=Number(comic_card.getLocation('y'));
    console.log("the position before hovering is ",before_location);
});

When("I  hover on the element {string}",(mouse)=>{
     var comic_card=$("(//img[@class='card-thumb-frame__thumbnail img__blur'])[1]");
    
    comic_card.moveTo();
});

Then("I expect the elements {string} position  is not equal to  the saved position",(after_location)=>{
    var comic_card=$("(//img[@class='card-thumb-frame__thumbnail img__blur'])[1]");
    after_location=Number(comic_card.getLocation('y'));
    console.log("the position after hovering is ",after_location);
    assert.ok(before_location > after_location);
});