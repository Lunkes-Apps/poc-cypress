
const letras = 'abcdefghijlmnopqrstuvxz'
const numeros = '123456789'
const especiais = '!@#$%¨&*()+{}[]=-'

function setFormato(formato) {
    var caracteres = ''
    for (let i in formato) {
        switch (formato[i]) {
            case 'L':
                caracteres += letras
                break
            case 'N':
                caracteres += numeros
                break
            case 'E':
                caracteres += especiais
                break
        }
    }

    return caracteres
}

/**
 * 
 * @param {usar como um array com L, N, e E} formato 
 * @param {quantidade de caracteres} qty 
 * @returns 
 */
export function gerarNCaracteres(formato, qty) {
    var caracteres = setFormato(formato);
    var texto = '';
    for (var i = 0; i < qty; i++) {
        texto += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return texto;
}

export function geraEmailNCaracteres(qty){
    var caracteres = setFormato(['L','N'])
    var texto = ''
    for (var i = 0; i < qty-10; i++) {
        texto += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return `${texto}@teste.com`
}

export function geraUrlNCaracteres(qty){
    var caracteres = setFormato(['L','N'])
    var texto = ''
    for (var i = 0; i < qty-15; i++) {
        texto += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return `https://${texto}.com.br`
}

export function gerarPhoneNCaracteres(qty){
    var caracteres = setFormato(['N'])
    var texto = ''
    for (var i = 0; i < qty-4; i++) {
        texto += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return `(92)${texto}`
}