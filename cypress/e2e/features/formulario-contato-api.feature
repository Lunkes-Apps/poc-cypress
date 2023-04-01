Feature: Formulário de Contato simples

    COMO usuário
    QUERO preencher e enviar um formulário
    PARA entrar em contato com a PagBrasil

    @smoke-test
    Scenario: Envio de formulário pela Api com todos os dados corretos
        Given que tenho o body do payload
            | Campo   | Valor                                                                 |
            | Name    | Alexandre Lunkes 1990                                                 |
            | Email   | lunkes.alexandre19@gmail.com                                          |
            | Company | Lunkes 1901                                                           |
            | Website | https://lunkes.com/home?valore=teste                                  |
            | Phone   | (92) 99255-0565                                                       |
            | Inquiry | Olá estou entrando para saber se posso ter um desconto no seu serviço |
        When envio a requisição post para 'inquiry'
        Then é retornado resultado '200' com os dados
            | sucesso | erro |
            | true    |      |

    @smoke-test
    @ignore
    Scenario: Envio de formulário pela Api com um dado em branco
        Given que tenho o body do payload
            | Campo   | Valor                                                                 |
            | Name    | Alexandre Lunkes 1990                                                 |
            | Email   |                                                                       |
            | Company | Lunkes 1901                                                           |
            | Website | https://lunkes.com/home?valore=teste                                  |
            | Phone   | (92) 99255-0565                                                       |
            | Inquiry | Olá estou entrando para saber se posso ter um desconto no seu serviço |
        When envio a requisição post para 'inquiry'
        Then é retornado resultado '412' com os dados
            | sucesso | erro                  |
            | false   | Campo Email inválido. |

    @smoke-test
    @ignore
    Scenario: Envio de formulário pela Api com payload sem o campo company
        Given que tenho o body do payload
            | Campo   | Valor                                                                 |
            | Name    | Alexandre Lunkes 1990                                                 |
            | Email   |                                                                       |
            | Website | https://lunkes.com/home?valore=teste                                  |
            | Phone   | (92) 99255-0565                                                       |
            | Inquiry | Olá estou entrando para saber se posso ter um desconto no seu serviço |
        When envio a requisição post para 'inquiry'
        Then é retornado resultado '400' com os dados
            | sucesso | erro                                       |
            | false   | Campo Company é obrigatório na requisição. |



