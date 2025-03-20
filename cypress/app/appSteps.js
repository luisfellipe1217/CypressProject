import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const input = {
  title: '  ',
  url: '  '
}

    Given("I am on the image registration page", function () {
      cy.open_web_page()
    })

    When("I enter {string} in the title field", () => {
      cy.insert_text_imgTitle(input.title)
    })

    Then("I enter {string} in the URL field", () => {
      cy.insert_text_imgUrl(input.url)
    })

    Then("I click the submit button", () => {
      cy.click_submit_button()
    })

    Then("I should see Please type a title for the image message above the title field", () => {
      cy.verify_message_title_feedback()
    })

    Then("I should see Please type a valid URL message above the imageUrl field", () => {
      
    })

    Then('I should see an exclamation icon in the title and URL fields', () => {
      cy.verify_title_color()
    })