Feature: Capturer captures LC draft

  Scenario: Capturer captures a draft LC
    Given user logs in as "capturer"
    When capturer captures an LC draft
    Then LC status should be "DRAFT"
