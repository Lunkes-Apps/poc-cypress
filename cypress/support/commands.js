// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import { geraEmailNCaracteres, geraUrlNCaracteres, gerarNCaracteres, gerarPhoneNCaracteres } from "./utils/stringUtils";

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('typeNCaracteres', (seletor, qtyCaracteres, formatoDoTexto) => {
    var texto

    if (formatoDoTexto.includes('M')) {
        texto = geraEmailNCaracteres(qtyCaracteres)
    } else if (formatoDoTexto.includes('U')) {
        texto = geraUrlNCaracteres(qtyCaracteres)
    } else if (formatoDoTexto.includes('P')) {
        texto = gerarPhoneNCaracteres(qtyCaracteres)
    } else {
        texto = gerarNCaracteres(formatoDoTexto, qtyCaracteres)
    }

    cy.get(seletor).type(texto, { parseSpecialCharSequences: false })
})