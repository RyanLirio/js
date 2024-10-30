let entrada = prompt("Informe uma palavra:");
entrada = entrada.toLowerCase();
let entradaInvertida = "";

for(let i = entrada.length - 1; i >= 0; i--)
{
    entradaInvertida += entrada[i];
}

if (entrada === entradaInvertida)
    {
        alert("A palavra " + entrada + " é um palíndromo!")
    }
else
{
    alert("A palavra "+ entrada + " não é um palíndromo ): \nQuando invertida, fica assim: " + entradaInvertida);
}