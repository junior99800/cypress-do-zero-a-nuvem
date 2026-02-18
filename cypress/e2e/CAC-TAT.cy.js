describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })


  it('verifica o título da aplicação', () => {
    cy.visit('./src/index.html')

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  
  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('Junior')
    cy.get('#lastName').type('Tavares')
    cy.get('#email').type('juniortavares@hotmail.com')
    cy.get('#open-text-area').type('melhorar o tamanho da fonte')
    cy.get('button[type="submit"]').click()  
    cy.get('.success').should('be.visible')
  })

  it('valida se o compo telefone aceita apenas numeros', () => {
    cy.get('#phone')
      .type('asadadsa')
      .should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Junior')
    cy.get('#lastName').type('Tavares')
    cy.get('#email').type('juniortavareshotmail.com')
    cy.get('#open-text-area').type('melhorar o tamanho da fonte')
    cy.get('#phone-checkbox').click()  
    cy.get('button[type="submit"]').click()  
    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('junior')
      .should('have.value','junior')
      .clear()
      .should('have.value', '')
    cy.get('#lastName')
      .type('tavares')
      .should('have.value','tavares')
      .clear()
      .should('have.value', '')
    cy.get('#email')
      .type('juniorcarros@hotmail.com')
      .should('have.value','juniorcarros@hotmail.com')
      .clear()
      .should('have.value', '')  
    cy.get('#phone')
      .type('88989789')
      .should('have.value','88989789')
      .clear()
      .should('have.value', '')
  })
  
  
  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.get('button[type="submit"]').click()
    
    cy.get('.error').should('be.visible')
  })

  it('envia o formuário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  })

it.only('envia o formulário com sucesso usando um comando customizado', () => {
  

  cy.fillMandatoryFieldsAndSubmit(data)

  cy.get('.success').should('be.visible')
})


})    
