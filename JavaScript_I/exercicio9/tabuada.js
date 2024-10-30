let numeroEntrada = Number(prompt("Qual numero deseja receber a tabuada do 1 ao 20?"));
let tabuada = "";

for(let i = 1; i < 21; i++)
{
    tabuada += numeroEntrada + " X " + i + " = " + (numeroEntrada * i) + "\n";
}
alert("A tabuada de 1 a 20 de " + numeroEntrada + " é:\n" + tabuada)

console.log(tabuada)