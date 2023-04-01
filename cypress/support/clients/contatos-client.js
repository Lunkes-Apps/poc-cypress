export function postFormulario(formulario, validacao) {
    return cy.request('GET', 'http://localhost:3000/api/contatos')
        .then(validacao)
}