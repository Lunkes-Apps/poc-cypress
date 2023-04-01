Feature: Formulário de Contato simples

    COMO usuário
    QUERO preencher e enviar um formulário
    PARA entrar em contato com a PagBrasil

    @smoke-test
    Scenario: Envio de formulário preenchido com todos os dados corretos
        Given que estou na página de formulário
        When preencho os dados com os valores
            | Campo   | Valor                                                                 |
            | Name    | Alexandre Lunkes 1990                                                 |
            | Email   | lunkes.alexandre19@gmail.com                                          |
            | Company | Lunkes 1901                                                           |
            | Website | https://lunkes.com/home?valore=teste                                  |
            | Phone   | (92) 99255-0565                                                       |
            | Inquiry | Olá estou entrando para saber se posso ter um desconto no seu serviço |
        And envio o formulário
        Then é mostrado a mensagem de sucesso

    @smoke-test
    Scenario: Envio de formulário com campos em branco
        Given que estou na página de formulário
        When preencho os dados com os valores
            | Campo   | Valor |
            | Name    |       |
            | Email   |       |
            | Company |       |
            | Website |       |
            | Phone   |       |
            | Inquiry |       |
        And envio o formulário
        Then é mostrado mensagens de alerta nos campos inválidos
            | Campo   |
            | Name    |
            | Email   |
            | Company |
            | Website |
            | Phone   |
            | Inquiry |

    @smoke-test
    @ignore
    Scenario: Envio de formulário com valores inválidos
        Given que estou na página de formulário
        When preencho os dados com os valores
            | Campo   | Valor                                                                   |
            | Name    | @Alexandre Lunkes 1999                                                  |
            | Email   | lunkes.alexandre%%%%gmail.com                                           |
            | Company | Lunkes & Lunkes                                                         |
            | Website | https://lunkes.com/home?valore=teste teste                              |
            | Phone   | 92 992550565 Teste                                                      |
            | Inquiry | !Olá estou entrando para saber se posso ter um desconto no seu serviço! |
        And envio o formulário
        Then é mostrado mensagens de alerta nos campos inválidos
            | Campo   |
            | Name    |
            | Email   |
            | Company |
            | Website |
            | Phone   |
            | Inquiry |

    Scenario: Envio de formulário com valor máximo aceitável de caracteres
        Given que estou na página de formulário
        When preencho os dados com os valores com N caracteres
            | Campo   | Quantidade | Formato |
            | Name    | 255        | L,N     |
            | Email   | 150        | M       |
            | Company | 200        | L,N     |
            | Website | 200        | L,N     |
            | Phone   | 15         | P       |
            | Inquiry | 500        | L,N     |
        And envio o formulário
        Then é mostrado a mensagem de sucesso

    @ignore
    Scenario: Envio de formulário com valor acima do máximo aceitável de caracteres
        Given que estou na página de formulário
        When preencho os dados com os valores com N caracteres
            | Campo   | Quantidade |
            | Name    | 256        |
            | Email   | 151        |
            | Company | 201        |
            | Website | 201        |
            | Phone   | 16         |
            | Inquiry | 501        |
        And envio o formulário
        Then é mostrado mensagens de alerta nos campos inválidos
            | Campo   |
            | Name    |
            | Email   |
            | Company |
            | Website |
            | Phone   |
            | Inquiry |

