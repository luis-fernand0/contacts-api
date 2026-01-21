export function validarNumero(numero) {
    let numero_formatado = numero.replace(/\D/g, '')

    let regex = /^\d{10,11}$/
    if(regex.test(numero_formatado)) return true

    return false
}