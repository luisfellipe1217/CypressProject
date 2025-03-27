import 'cypress-localstorage-commands'

import elements from '../pageObjects/uploadImagePage';



const colors = {
    errors: 'rgb(220, 53, 69)',
    success: '#198751'
  }
    Cypress.Commands.add('open_web_page', () => {
        cy.visit('/')
        cy.get(elements.imageUrlInput).should('be.visible')
      })
      
      Cypress.Commands.add('insert_text_imgUrl', (inputUrl) => {
        cy.get(elements.imageUrlInput).type(`${inputUrl}`)
      })

      Cypress.Commands.add('insert_text_imgTitle', (inputTitle) => {
        cy.get(elements.titleInput).type(`${inputTitle}`)
      })

      Cypress.Commands.add('click_submit_button', () => {
        cy.get(elements.submitBtn).click()
      })
      
      Cypress.Commands.add('verify_message_url_feedback', () => {
        cy.get(elements.imageUrlFeedback).should('contain', "Please type a valid URL")
      })

      Cypress.Commands.add('verify_message_title_feedback', () => {
        cy.get(elements.titleFeedback).should('contain', "Please type a title for the image")
      })

      Cypress.Commands.add('verify_title_color', () => {
        cy.get(elements.titleInput).should("have.css", "border-right-color", colors.errors);
      })

      Cypress.Commands.add('verify_title_color_success', () => {
        cy.get(elements.titleInput).should("have.css", "broder-right-color", colors.success);
      })

      Cypress.Commands.add('hit_enter_key', () => {
        cy.get(elements.imageUrlInput).type('Cypress.io{enter}');
      })

      Cypress.Commands.add('validate_card_list', () => {
        cy.get(elements.cardList).should("contain", "Alien BR");
      })
      
      Cypress.Commands.add('validate_local_storage_item', () =>{
        cy.getLocalStorage("tdd-ew-db").should("contain", "Alien BR");
      })
