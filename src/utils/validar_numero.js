export function validarNumero(numero) {
    let regex = /^(([( ]|)[0-9]{2}([) ]|))( |)([0-9]{4,5})( |-|)([0-9]{4})$/
    if(regex.test(numero)) return true

    return false
}