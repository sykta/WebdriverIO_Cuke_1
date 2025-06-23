Feature: Test Login Functionality
#   Scenario: Check login with valid credentials

  Scenario Outline: Check login with valid credentials
    Given User is on login page
    When User enters <username> and <password>
    And Clicks on login button
    Then This <message> is displayed

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | user123  | pass123              | Your username is invalid!      |
