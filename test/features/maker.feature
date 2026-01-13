Feature: Maker submits LC

  Scenario: Maker submits LC for checker
    Given user logs in as "maker"
    When maker submits the LC
    Then LC status should be "PENDING_CHECKER"
