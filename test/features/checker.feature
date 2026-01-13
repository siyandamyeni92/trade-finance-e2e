Feature: Checker approves LC

  Scenario: Checker approves LC for approver
    Given user logs in as "checker"
    When checker approves the LC
    Then LC status should be "PENDING_APPROVER"
