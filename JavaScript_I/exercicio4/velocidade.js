const carro1 = prompt("Qual o nome do primeiro carro?")
const carro2 = prompt("Qual o nome do segundo carro?")

const velocidade1 = prompt("Qual a velocidade do " + carro1 + "?")
const velocidade2 = prompt("Qual a velocidade do " + carro2 + "?")

if(velocidade1 > velocidade2)
    {
        alert ("O " + carro1 + " é mais rapido que o " + carro2)
    }
else if(velocidade1 < velocidade2)
    {
        alert ("O " + carro2 + " é mais rapido que o " + carro1)
    }
else
{
    alert ("Os dois carros tem a mesma velocidade!")
}