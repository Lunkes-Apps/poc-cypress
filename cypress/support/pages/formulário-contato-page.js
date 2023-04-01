export class Formulario {

    preencherName(valor) {
        cy.get('#Name').type(valor)
        return this
    }

    preencherEmail(valor) {
        cy.get('#Email').type(valor)
        return this
    }

    preencherCompany(valor) {
        cy.get('#Company').type(valor)
        return this
    }

    preencherWebsite(valor) {
        cy.get('#Website').type(valor)
        return this
    }

    preencherPhone(valor) {
        cy.get('#Phone').type(valor)
        return this
    }

    preencherInquiry(valor) {
        cy.get('#Inquiry').type(valor)
        return this
    }

    teste(valor) {
        cy.get('[name="origem"]').type(valor)
    }

    submit() {
        cy.get('button').contains('Comparar Textos')
            .click()
        return this
    }

}


