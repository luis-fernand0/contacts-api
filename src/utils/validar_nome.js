export function validarNome(nome) {
    let regex = /^([A-Za-z]{3,} (((d[oae](s|) )|(D[OAE](S|) )|)[A-Za-z]{3,}( |))+)$/

    if(regex.test(nome)) return true

    return false
}