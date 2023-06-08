Feature: Login functionality
  Scenario: Positive LogIn test
    Given I am on Practice test Automation login page
    When type username "student" into Username field
    And type password "Password123" into Password field
    When punch Submit button
    Then verify new page URL contains "practicetestautomation.com/logged-in-successfully"
    And verify new page contains expected text "(\'Congratulations\' or \'successfully logged in\')"
    And verify button "Log out" is displayed on the new page

  Scenario: Negative username test
    Given I am on Practice test Automation login page
    When type username "incorrectUser" into Username field
    And type password "Password123" into Password field
    When punch Submit button
    Then verify error message is displayed
    And verify error message text is Your username is invalid!

  Scenario: Negative password test
    Given I am on Practice test Automation login page
    When type username "student" into Username field
    And type password "incorrectPassword" into Password field
    When punch Submit button
    Then verify error message is displayed
    And verify error message text is "Your password is invalid!"