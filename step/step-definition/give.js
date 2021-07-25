const { Given} = require('@cucumber/cucumber');

Given("open url {string}",(url) => {
    browser.url(url);
    
    
});

