Feature: Contact
    This feature file covers scenarios related to contact functionality
    of Jupiter Toys application

    Background:
        Given I am on the Jupiter Toys home page
        And I navigate to "Contact" page

    ########################################################################
    #   Test case 1:
    #      1. From the home page, go to the contact page.
    #      2. Click the submit button.
    #      3. Verify error messages.
    #      4. Populate mandatory fields.
    #      5. Validate errors are gone.
    ########################################################################
    Scenario: [Testcase_1]: Validate error messages for Mandatory fields
        When I enter the following values into the form and "submit"
            | field | value |
        Then I should get the following error messages
            | field    | value                |
            | Forename | Forename is required |
            | Email    | Email is required    |
            | Message  | Message is required  |
        When I enter the following values into the form and "not submit"
            | field    | value                          |
            | Forename | Gurpreet                       |
            | Email    | gurpreet.singh@mymail.com      |
            | Message  | This is a sample test message. |
        Then I should not get any error messages


    ########################################################################
    #   Test case 2:
    #      1. From the home page go to contact page.
    #      2. Populate mandatory fields.
    #      3. Click submit button.
    #      4. Validate successful submission message.
    #   Note: Run this test 5 times to ensure 100% pass rate.
    ########################################################################
    Scenario Outline: [Testcase_2]: Validate successful submission messages on providing all mandatory field values
        When I enter the following values into the form and "submit"
            | field    | value                          |
            | Forename | Gurpreet                       |
            | Email    | gurpreet.singh@mymail.com      |
            | Message  | This is a sample test message. |
        Then I should see the successful submission message like "Thanks <forename>, we appreciate your feedback."
        Examples:
            | runs |
            | 1    |
            | 2    |
            | 3    |
            | 4    |
            | 5    |
