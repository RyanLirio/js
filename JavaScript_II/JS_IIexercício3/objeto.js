let imoveisCadastrados = [];
let menu = true;
let i = 0;
let j = 0;
let sairdoloop = true;
while(menu)
{
    let acao = prompt("Quantidade de imóveis cadastrados: " + imoveisCadastrados.length + "\n"
        + "O que deseja fazer?\n1 - Salvar um imóvel\n2 - Mostrar os imóveis salvos\n0 - Sair");

    sairdoloop = true;
    switch(acao)
    {
        case "1":
            while(sairdoloop){
            let nomeProprietario = prompt("Qual o nome do proprietário?");
            let quartos = prompt("Qual a quantidade de quartos desse imóvel?");
            let banheiros = prompt("Qual a quantidade de banheiros?");
            let garagem = prompt ("Possui garagem?");
            sairdoloop = prompt("Gostaria de adicionar mais algum imóvel?");

            let imovel = {
                proprietário: nomeProprietario,
                quartos: quartos,
                banheiros: banheiros,
                garagem: garagem
            }
            imoveisCadastrados.push(imovel);
            console.log("Imovel cadastrado com sucesso!");
            if(sairdoloop == "não"){
                sairdoloop = false;
            }
            }

            break;
        case "2":
            if(imoveisCadastrados.length === 0)
            {
                console.log("Não existe nenhum imóvel cadastrado")
            }else       
            {
            imoveisCadastrados.forEach(function(item, index){
                console.log("Imóvel " + (index+1));
                console.log("Vendido por: " + item.proprietário);
                console.log("Quartos: " + item.quartos);
                console.log("Garagem: " + item.garagem);
                console.log("");
                
            });
            }
            console.log(imoveisCadastrados);
            break;
        case "0":
            console.log("Saindo...");
            menu = false;
        default:
            console.log("Opção inválida!")
            break;
    }
}

/*for(; i < 9; i++)
            {
                imoveisCadastrados[i] = "imovel " + (i+1) + [[]];
                
                for(; i < 9; j++)
                {
                    
                    imoveisCadastrados[i][j] = ["Nome do proprietário: " + nomeProprietario,
                        "Quartos: " + quartos,
                        "Banheiros: " + banheiros,
                        "Garagem: " + garagem
                    ]
                    
                    if(sairdoloop == "não")
                    {
                        i = 9;
                    }
                    
                }
                //imoveisCadastrados.push(nomeProprietario, quartos, banheiros, garagem);
                console.log(imoveisCadastrados);
                console.log(imoveisCadastrados[0][0])
            }*/