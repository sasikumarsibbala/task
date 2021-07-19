Create a Webdriver IO test suite. ( install Node and Yarn)
Tests to be written in Gherkin Format in feature files. folder-> (./features/sample.feature)
Integrate cucumber and Create the pre-defined steps in (./custom/steps)
Scenario to Automate.
Given i open the URL 'https://www.marvel.com/explore'
And I hover on Comic even cards
Then I expect that the card is raised.
Hint-> Create a custom step to capture the position of the element before hover , and then capture and validate  the position of the element after hover.
Scenario to Automate.
Given i open the URL 'https://www.marvel.com/explore'
And I Click on the banner ad
Then I expect that a new window or Tab is opened.
