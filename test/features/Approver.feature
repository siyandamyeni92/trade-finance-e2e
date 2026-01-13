Feature: Approver authorizes LC

  Scenario: Approver authorizes LC
    Given user logs in as "approver"
    When approver authorizes the LC
    Then LC status should be "APPROVED"

That file is a Cucumber Feature file written in Gherkin.
It is the business-readable specification of your Trade Finance workflow.

This is what business users, auditors, and QA can read and understand

It describes behaviour and not code