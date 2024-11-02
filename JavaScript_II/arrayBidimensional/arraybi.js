//voce pode criar um array dentro do outro = matriz(se comporta como se fosse)
let matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"]
]

console.table(matriz);

//tem que referenciar com o indice assim
matriz[0].push("Nova coluna");
matriz.push("Nova linha");
console.table(matriz);

//para percorrer usamos 1 for para cada dimensão
for (let i = 0; i <matriz.length; i++)
{
    for(let j = 0; j < matriz[i].length; j++)
    {
        let posicao = "Posição: " + matriz[i][j];
        console.log("Posição: (" + i + ", " + j + ") " + " Valor: " + posicao)
    }
}
