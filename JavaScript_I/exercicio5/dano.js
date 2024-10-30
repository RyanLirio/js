const p1 = prompt ("Qual personagem irá atacar?")
const poderp1 = prompt ("Qual o poder de ataque de " + p1 + "?")

const p2 = prompt ("Qual personagem irá receber o ataque?")
const vidap2 = prompt ("Qual a quantidade de pontos de vida de " + p2 + "?")
const defesa2 = prompt ("Qual a quantidade de pontos de defesa de " + p2 + "?")
const escudop2 = prompt ( p2 + " possui um escudo?(sim ou não)")
let pontosEscudop2 = 0

if(escudop2 == "sim")
    {
        pontosEscudop2 = 2 
    }
else if(escudop2 == "não")
{
    pontosEscudop2 = 1
}

alert ("Calculando dano...")

if(poderp1 > defesa2 && pontosEscudop2 == 1)
    {
        alert ("O dano causado é de: " + (poderp1 - defesa2))
        alert ("O " + p2 + "ficou com: " + ((vidap2) - (poderp1 - defesa2)) + " pontos de vida")
    }
else if(poderp1 > defesa2 && pontosEscudop2 == 2)
    { 
        alert ("O dano causado é de: " + ((poderp1 - defesa2)/pontosEscudop2))
        alert ("O " + p2 + "ficou com: " + ((vidap2)-((poderp1 - defesa2)/pontosEscudop2)))
    }
else
{
    alert("O dano causado é de: 0!")
    alert("O " + p2 + "ficou com: " + vidap2 + " pontos de vida")
}