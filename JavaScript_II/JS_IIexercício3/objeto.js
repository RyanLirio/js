let imoveisCadastrados = [[]];
let menu = true;

while(menu)
{
    let acao = prompt("Quantidade de imóveis cadastrados: " + imoveisCadastrados.length + "\n"
        + "O que deseja fazer?\n1 - Salvar um imóvel\n2 - Mostrar os imóveis salvos\n0 - Sair");

    switch(acao)
    {
        case "1":
            for(let i = 0; i < 9; i++)
            {

                imoveisCadastrados[i][0] = prompt("Qual o nome do proprietário?");
                imoveisCadastrados[i][1] = prompt("Qual a quantidade de quartos desse imóvel?");
                imoveisCadastrados[i][2] = prompt("Qual a quantidade de banheiros?");
                imoveisCadastrados[i][3] = prompt ("Possui garagem?");
                let sairdoloop = prompt("Gostaria de adicionar mais algum imóvel?")
                if(sairdoloop == "sim")
                    {
                        i = 9;
                    }
            }
            console.log(imoveisCadastrados[0]);
            
            break;
        case "2":
        case "0":
            menu = false;
        default:
    }
}