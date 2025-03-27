import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


    Given("I am on the image registration page", function () {
      cy.open_web_page()
    })

    When("I don't enter anything in the title field", function () { });

    When("I don't enter anything in the URL field", function () {});

    When("I enter {string} in the title field", (title) => {
      cy.insert_text_imgTitle(title)
    })

    Then("I enter {string} in the URL field", (imgUrl) => {
      cy.insert_text_imgUrl(imgUrl)
    })

    Then("I click the submit button", () => {
      cy.click_submit_button()
    })

    Then("I should see Please type a title for the image message above the title field", () => {
      cy.verify_message_title_feedback()
    })

    Then("I should see Please type a valid URL message above the imageUrl field", () => {
      cy.verify_message_url_feedback()
    })

    Then('I should see an exclamation icon in the title and URL fields', () => {
      cy.verify_title_color()
    })

    Then("I should see a check icon in the title field", function () {
      cy.verify_title_color_success();
    });

    Then("I can hit enter to submit the form", function () {
      cy.hit_enter_key();
    });

    Then("the list of registered images should be updated with the new item", function () { 
      cy.validate_card_list();
    });

    Then("the new item should be stored in the localStorage", function () { 
      cy.validate_local_storage_item();
    });

    Then("The inputs should be cleared", function () {
      cy.clearAllLocalStorage();
    });



