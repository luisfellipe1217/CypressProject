/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const imgInfo = {
  imgUrl: 'https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg',
  imgTitle: 'Alien BR'
}  


    Given("I am on the image registration page", () => {
      cy.open_web_page()
    })

    Given("I have submitted an image by clicking the submit button", () => {
      cy.insert_text_imgTitle(imgInfo.imgTitle)
      cy.insert_text_imgUrl(imgInfo.imgUrl)
      cy.click_submit_button()
      cy.validate_card_list()
    });

    When("I don't enter anything in the title field", () => { });

    When("I don't enter anything in the URL field", () => {});

    When("I enter {string} in the title field", (title) => {
      cy.insert_text_imgTitle(title)
    })

    When("I enter {string} in the URL field", (imgUrl) => {
      cy.insert_text_imgUrl(imgUrl)
    })

    When("I click the submit button", () => {
      cy.click_submit_button()
    })

    When("I refresh the page", () => {
      cy.reload()
    });

    Then("I should see Please type a title for the image message above the title field", () => {
      cy.verify_message_title_feedback()
    })

    Then("I should see Please type a valid URL message above the imageUrl field", () => {
      cy.verify_message_url_feedback()
    })

    Then('I should see an exclamation icon in the title and URL fields', () => {
      cy.verify_title_color()
    })

    Then("I should see a check icon in the title field", () => {
      cy.verify_title_color_success()
    });

    Then("I can hit enter to submit the form", () => {
      cy.hit_enter_key()
    });

    Then("the list of registered images should be updated with the new item", () => { 
      cy.validate_card_list()
    });

    Then("the new item should be stored in the localStorage", () => { 
      cy.validate_local_storage_item()
    });

    Then("The inputs should be cleared", () => {
      cy.clearAllLocalStorage()
    });

    Then("I should still see the submitted image in the list of registered images", () => {
      cy.validate_card_list()
      cy.validate_local_storage_item()
    });



