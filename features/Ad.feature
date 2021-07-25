 Feature: Marvel Home Page 
  
   Scenario: Testing the ad functinality
      
       Given open url "/games"
       When click on the element "//iframe[@id='google_ads_iframe_/21783347309/marvel.com/games/ad-1-89_0']"
       Then I expect a new tab or window is opened 
