const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { postFormulario } = require("../../support/clients/contatos-client");

const payload = {}
let response
let pathToTest

Given('que tenho o body do payload', (dados) => {
    for (let i in dados.rows()) {
        payload[dados.rows()[i][0]] = dados.rows()[i][1]
    }
    console.log(payload)
})

When('envio a requisição post para {string}', (path) => {
    pathToTest = `http://base-url/${path}`
})

Then('é retornado resultado {string} com os dados', (code, retorno) => {
    postFormulario(payload, (response) => {
        expect(response.status).to.eq(parseInt(code))
        expect(response.body.contato[0]).to.have.property('sucesso', retorno.rows()[0][0])
        expect(response.body.contato[0]).to.have.property('erro', retorno.rows()[0][1])
    }, pathToTest)
})

