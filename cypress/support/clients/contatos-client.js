export function postFormulario(formulario, validacao, path) {
    return cy.request('POST', path, formulario)
        .then(validacao)
}