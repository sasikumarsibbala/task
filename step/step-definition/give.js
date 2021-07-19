const { Given} = require('@cucumber/cucumber');
const { expect } = require('chai');

Given("open url {string}",(url) => {
    browser.url(url);
    browser.maximizeWindow();   
    expect(url).toEqual("/explore");
});