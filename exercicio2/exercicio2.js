const operação = prompt("Qual operação deseja realizar?" +
    "\nPara soma, dgite +" +
    "\nPara Subtração, digite -" +
    "\nPara multiplicação, digite *" +
    "\nPara divisão, digite /"
)
const v1 = prompt("insira o primeiro valor")
const v2 = prompt("insira o segundo valor")

const num1 = parseFloat(v1)
const num2 = parseFloat(v2)

switch(operação)
{
    case "+": 
        alert ("O resultado de sua soma é: " + (num1 + num2))
        break
    case "-": 
        alert ("O resultado de sua subtração é: " + num1 - num2)
        break
    case "*": 
        alert ("O resultado de sua multiplicação é: " + num1 * num2)
        break
    case "/": 
        alert ("O resultado de sua divisão é: " + num1 / num2)
        break
    default: break

}