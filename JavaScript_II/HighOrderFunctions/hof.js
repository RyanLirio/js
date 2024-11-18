function exibirElemento(elemento, indice, array)
{
    console.log({
        elemento, 
        indice,
        array}
    )
}
const lista = [ "camaro", "hornet", "CG", "Porsche"];

lista.forEach(exibirElemento);