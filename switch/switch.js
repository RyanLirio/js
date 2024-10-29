const resultado = prompt("Escolha uma resposta:\n1\n2\n3")

const resultadoNumerico = parseFloat(resultado)


switch (resultadoNumerico)
{
    case 1:
        alert("O resultado é 'a'")
        break 
    case 2:
        alert("O resultado é 'b'")
        break 
    case 3:
        alert("O resultado é 'c'")
        break 
    default:
        alert("finalizando")
}
