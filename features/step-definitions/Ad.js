import { Given, When, Then } from '@cucumber/cucumber'
import { assert } from 'chai';
var no_of_tabs=0;

Given("open url {string}",(link) => {
    link="./explore";
    browser.url(link);
    browser.maximizeWindow();    
});

When("click on the element {string}",(ad) =>{
    ad=$("//iframe[@id='google_ads_iframe_/21783347309/marvel.com/explore/ad-1-87_0']");
    ad.click();

});
Then ("expect new tab opened {string}",(no_of_tabs) =>{
    const  handles = browser.getWindowHandles();
    no_of_tabs=handles.length
    console.log("no of tabs opened ",no_of_tabs);
    assert.ok(no_of_tabs==2);

});

 