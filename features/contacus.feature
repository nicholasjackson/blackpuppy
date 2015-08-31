Feature: As a user I would like to test the contact us form

Scenario: Check the form is correctly displayed
  Given I am on the homepage
  Then I should see the contact us form

Scenario: When I submit the form it calls the server
  Given that Mimic is running
  And I am on the homepage
  When I complete the contact us form
  And press submit
  Then I should see the message sent
