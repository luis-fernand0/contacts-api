export function validarNome(nome) {
    let regex = /^([a-z]{3,} (((d[oae](s|) )|)[a-z]{3,}( |))+)$/

    if(regex.test(nome)) return true

    return false
}