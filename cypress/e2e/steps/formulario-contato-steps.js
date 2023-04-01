const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { Formulario } = require("../../support/pages/formulário-contato-page");

const formulario = new Formulario()

Given('que estou na página de formulário', () => {
    /**
     * Código para entrar no fluxo até a página do formulário
     */
    cy.visit('https://www.invertexto.com/comparar-textos')
})

When('preencho os dados com os valores', (valores) => {
    const name = valores.rows()[0][1]
    const email = valores.rows()[1][1]
    const company = valores.rows()[2][1]
    const website = valores.rows()[3][1]
    const phone = valores.rows()[4][1]
    const inquiry = valores.rows()[5][1]

    // const text = `Nome: ${name} \nEmail: ${email} \nCompany: ${company} \nWebsite: ${website} \nPhone: ${phone} \nInquiry: ${inquiry}`

    // formulario.preencherName(name)
    //     .preencherEmail(email)
    //     .preencherCompany(company)
    //     .preencherWebsite(website)
    //     .preencherPhone(phone)
    //     .preencherInquiry(inquiry)

    formulario.teste(text)
})

When('envio o formulário', () => {
    formulario.submit()
})

When('preencho os dados com os valores com N caracteres', (valores) => {
        
    const nameQty = valores.rows()[0][1]
    const nameFormato = valores.rows()[0][2].split(',')
    formulario.teste('\n Name \n')
    cy.typeNCaracteres('[name="origem"]', nameQty, nameFormato)
    
    const emailQty = valores.rows()[1][1]
    const emaileFormato = valores.rows()[1][2].split(',')
    formulario.teste('\n Email \n')
    cy.typeNCaracteres('[name="origem"]', emailQty, emaileFormato)

    const companyQty = valores.rows()[2][1]
    const companyFormato = valores.rows()[2][2].split(',')
    formulario.teste('\n Company \n')
    cy.typeNCaracteres('[name="origem"]', companyQty, companyFormato)

    const websiteQty = valores.rows()[3][1]
    const websiteFormato = valores.rows()[3][2].split(',')
    formulario.teste('\n Website \n')
    cy.typeNCaracteres('[name="origem"]', websiteQty, websiteFormato)
    
    const phoneQty = valores.rows()[4][1]
    const phoneFormato = valores.rows()[4][2].split(',')
    formulario.teste('\n Phone \n')
    cy.typeNCaracteres('[name="origem"]', phoneQty, phoneFormato)
    
    const inquiryQty = valores.rows()[5][1]
    const inquiryFormato = valores.rows()[5][2].split(',')
    formulario.teste('\n Inquiry \n')
    cy.typeNCaracteres('[name="origem"]', inquiryQty, inquiryFormato)

})

Then('é mostrado a mensagem de sucesso', () => {
    cy.get('#Sucesso').should('have.text', 'Mensagem enviada com sucesso')
})

Then('é mostrado mensagens de alerta nos campos inválidos', (camposComErro) => {
    camposComErro.array.forEach(campo => {
        cy.get('#Erro').contains(`Campo ${campo} inválido`)
    });
})

