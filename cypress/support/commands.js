import elements from '../pageObjects/uploadImagePage'


const colors = {
    errors: 'rgb(220, 53, 69)',
    success: ''
  }
    Cypress.Commands.add('open_web_page', () => {
        cy.visit('/')
        cy.get(elements.imageUrlInput).should('be.visible')
      })
      
      Cypress.Commands.add('insert_text_imgUrl', (inputUrl) => {
        cy.get(elements.imageUrlInput).type(`${inputUrl}`)
      })

      Cypress.Commands.add('insert_text_imgTitle', (inputTitle) => {
        cy.get(elements.imageUrlInput).type(`${inputTitle}`)
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
