const personagens =
[
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

//map

/*esse map é o melhoramento dessa função aqui

const nomes = []
for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i]
  nomes.push(personagem.nome)
}
*/
const nomes = personagens.map(function(personagem){
    return personagem.nome;
})
console.log(nomes);

const racas = personagens.map(function(tipo)
{
    return tipo.raca;
})
console.log(racas);


// filter: permite obter um novo array contendo apenas elementos específicos de um array existente

//const orcs = []
//for (let i = 0; i < personagens.length; i++) {
  //const personagem = personagens[i]
  //if (personagem.raca === "Orc") {
  //orcs.push(personagem)
  //}
//}
//console.log(orcs)

let orcs = personagens.filter(function(personagemORC)
{
    return personagemORC.raca === "Orc";
})

console.log(orcs);

//reduce, junta atributos de personagens

let somaNivel = personagens.reduce(function(valorTotal, nivell)
{
    return valorTotal + nivell.nivel;//soma dos niveis todos
}, 0)

console.log(somaNivel);

const racaPersonagem = personagens.reduce(function(valorTotal, nivell)
{
    if(valorTotal[nivell.raca])
        {
            valorTotal[nivell.raca].push(nivell);
        }
    else
    {
        valorTotal[nivell.raca] = [nivell];
    }
    return valorTotal;
}, {})//ele organiza em um objeto os elementos de acordo com a raça

console.log(racaPersonagem);

//SORT

//para armazenar e não alterar o array original faz assim
// const personagensOrdenados = personagens.slice().sort(function(a,b){})
personagens.sort(function(a, b)//compara e organiza de dois em 2
{//faz uma comaparação, se a for maior que b ele troca
    //return a.nivel - b.nivel//crescente
    return b.nivel - a.nivel //descrescente
})

console.log(personagens);//mostra o array ordenado