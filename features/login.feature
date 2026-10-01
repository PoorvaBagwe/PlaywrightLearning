Feature: Sauce Demo login functionality

Background:
  # Given user open "chrome" browser
  Given user navigate to "https://www.saucedemo.com"

@negative @errormsg @regression
Scenario Outline: Verify user able to see error msg for <scenario>
  When user enters "<username>" in username
  And user enters "<password>" in password
  And user clicks on login button
  Then user validates error msg "<errormsg>"

Examples:
  | scenario       | username      | password     | errormsg |
  | empty username |               | secret_sauce |          |
  | empty password | standard_user |              |          |
  | invalid creds  | adshgd        | dkhgfgd      |          |

@positive @smoke @sanity
Scenario: verify user able to see dashboard for valid username and valid password
  When user enters "standard_user" in username
  And user enters "secret_sauce" in password
  And user clicks on login button
  Then user validates dashboard