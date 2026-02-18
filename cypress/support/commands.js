Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'eliza',
    lastName: 'tavares',
    email: 'macaco99@gmail.com',
    text: 'maqueicos'

} ) => {
  cy.get('#firstName').type(data.firstName) // corrigido aqui
  cy.get('#lastName').type(data.lastName)
  cy.get('#email').type(data.email)
  cy.get('#open-text-area').type(data.text || 'Texto padrão')
  cy.get('button[type="submit"]').click() 
})