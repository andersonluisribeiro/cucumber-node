Feature: Template creation
  As a rest client
  I want to create a template
  So that they can be used by devices

  Scenario: Creating a simple template
    When I post a simple template
    Then I should get a template created
    And the status code should be 200

  #  Scenario: Creating a template with multiple attributes
  #   When I post a template with multiple attributes
  #   Then I should get a template created
  #   And the status code should be 200

  #  Scenario: Creating a template with an empty array of attributes
  #   When I post a template with an empty array of attributes
  #   Then I should get a template created
  #   And the status code should be 200

  # Scenario: Creating a template with one metadata
  #   When I post a template with one metadata
  #   Then I should get a template created
  #   And the status code should be 200

  # Scenario: Creating a template with multiple metadata
  #   When I post a template with multiple metadata
  #   Then I should get a template created
  #   And the status code should be 200