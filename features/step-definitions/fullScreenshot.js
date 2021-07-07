import { Given, When, Then } from '@cucumber/cucumber'
import { assert } from 'chai';



Given('open url{string}',(url) => {
    browser.url(url);
    browser.saveScreenshot("Screenshots/1.png");
  //   browser.url(link);

  //   // somehow wait for page to load
  //   // expect($('//span[@class="masthead__headline"]')).toBeVisible();
  //   browser.pause(5000);
 
  // browser.takeFullPageScreenshot('.scrrenshot/f.png');
  // browser.pause(5000);


  //  const screenshot = browser.takeFullPageScreenshot()
  //  console.log(screenshot);
 
  
           
          //  browser.pause(3000);
  // browser.saveScreenshot('/Users/sibbalasasikumar/Desktop/task/Screenshot/1.png');///Users/sibbalasasikumar/Desktop/task/Screenshot
          //  browser.saveDocumentScreenshot('/Users/sibbalasasikumar/Desktop/task/Screenshot/2.png');
//           const el = await $("//iframe[@id='google_ads_iframe_/21783347309/marvel.com/explore/ad-1-87_0']");
// await el.click()


 });
// When ("click on the element {string} is not in page",(elem) =>{
//     elem=$("//span[contains(text(),'See All Items')]");
//     elem.click();

// });




//     // take screenshot and save to file
//     browser.takeFullPageScreenshot({ path: './screenshot.png' })

//     // take screenshot but don't save to file
//     const screenshot = browser.takeFullPageScreenshot()
// })
// })