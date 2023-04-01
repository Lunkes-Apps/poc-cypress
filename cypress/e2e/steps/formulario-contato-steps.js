const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { Formulario } = require("../../support/pages/formulário-contato-page");

const formulario = new Formulario()

Given('que estou na página de formulário', () => {
    /**
     * Código para entrar no fluxo até a página do formulário
     */
    // cy.visit('http://portalemteste')
})

When('preencho os dados com os valores', (valores) => {
    const name = valores.rows()[0][1]
    const email = valores.rows()[1][1]
    const company = valores.rows()[2][1]
    const website = valores.rows()[3][1]
    const phone = valores.rows()[4][1]
    const inquiry = valores.rows()[5][1]

    formulario.preencherName(name)
        .preencherEmail(email)
        .preencherCompany(company)
        .preencherWebsite(website)
        .preencherPhone(phone)
        .preencherInquiry(inquiry)

})

When('envio o formulário', () => {
    formulario.submit()
})

When('preencho os dados com os valores com N caracteres', (valores) => {
        
    const nameQty = valores.rows()[0][1]
    const nameFormato = valores.rows()[0][2].split(',')
    cy.typeNCaracteres('#Name', nameQty, nameFormato)
    
    const emailQty = valores.rows()[1][1]
    const emaileFormato = valores.rows()[1][2].split(',')
    cy.typeNCaracteres('#Email', emailQty, emaileFormato)

    const companyQty = valores.rows()[2][1]
    const companyFormato = valores.rows()[2][2].split(',')
    cy.typeNCaracteres('#Company', companyQty, companyFormato)

    const websiteQty = valores.rows()[3][1]
    const websiteFormato = valores.rows()[3][2].split(',')
    cy.typeNCaracteres('#Website"]', websiteQty, websiteFormato)
    
    const phoneQty = valores.rows()[4][1]
    const phoneFormato = valores.rows()[4][2].split(',')
    cy.typeNCaracteres('#Phone', phoneQty, phoneFormato)
    
    const inquiryQty = valores.rows()[5][1]
    const inquiryFormato = valores.rows()[5][2].split(',')
    cy.typeNCaracteres('#Inquiry', inquiryQty, inquiryFormato)

})

Then('é mostrado a mensagem de sucesso', () => {
    cy.get('#Sucesso').should('have.text', 'Mensagem enviada com sucesso')
})

Then('é mostrado mensagens de alerta nos campos inválidos', (camposComErro) => {
    camposComErro.array.forEach(campo => {
        cy.get('#Erro').contains(`Campo ${campo} inválido`)
    });
})

