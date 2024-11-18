let vagasDisponiveis = [];
//let nomeVaga = "";
//let dataFinal = "";
//let descricaoVaga = "";
let opcao = "";
let novaVaga = {};
let i = 0;
do{
    opcao = prompt("Bem-vindo! O programa simula um sistema de vagas de emprego, onde é possivel gerenciar as vagas e adicionar candidatos as vagas" +
        "\nO que deseja fazer?" +
        "\n1 - Listar vagas disponíveis" +
        "\n2 - Criar uma nova vaga" + 
        "\n3 - Visualizar uma vaga" +
        "\n4 - Inscrever um candidato em uma vaga" +
        "\n5 - Excluir uma vaga" +
        "\n0 - Sair"
    );

    

    switch (opcao) {
        case "1":
            ListaVagas();
            i = 0;
            break;
        case "2":
            vagasDisponiveis.push(CriarVaga());
            break;
        case "3":
            MostrarVaga();     
            break;
        case "4":
            Candidatar();
            break;
        case "5":
            ExcluirVaga();
            break;
        case "0":
            alert("Finalizando...")
            break;
        default:
            break;
    }
}while(opcao != "0")

function CriarVaga()
{
    let nomeVaga = prompt("Nome da vaga: ");
    let descricaoVaga = prompt("Descrição da vaga: ");
    let dataFinal = prompt("Data final para se inscrever: (ex: 12/11/2024)");    
    let confirma = "";

    novaVaga = {
        nome: nomeVaga,
        descricao: descricaoVaga,
        data: dataFinal,
        candidatos: [],

        confirmacao()
        {
        confirma = prompt("Você confirma as informações preenchidas?(sim/não)\n" +
        "Nome da vaga: " + this.nome +
        "\nDescrição da vaga: " + this.descricao +
        "\nData final para se inscrever: " + this.data);
        }
    }
    novaVaga.confirmacao();
    
    if(confirma === "sim"){
        console.log("Vaga cadastrada com sucesso!")
        return novaVaga;
    }else{
        console.log("Vaga cancelada!")
    }
}

function MostrarVaga()
{
    let candidatosInscritos = "";
    let indice = prompt("Qual o indice(numero) da vaga que você deseja visualizar?");
    if(indice <= vagasDisponiveis.length){

    let vagaEscolhida = vagasDisponiveis[indice];//MUITO IMPORTANTE PRA ACESSAR O ARRAY

    for(i = 0; i < vagaEscolhida.candidatos.length; i++)
    {
        candidatosInscritos += "\nCandidato " + (i+1) + ": " + vagaEscolhida.candidatos[i]
    }

    console.log(candidatosInscritos)
    
    alert("Vaga escolhida: " + vagaEscolhida.nome +
        "\nIndice: " + (i-vagaEscolhida.candidatos.length) + 
        "\nDescrição da vaga: " + vagaEscolhida.descricao +
        "\nData limite para se inscrever para a vaga: " + vagaEscolhida.data +
        "\nNúmero de candidatos inscritos na vaga: " + vagasDisponiveis[indice].candidatos.length +
        "\nCandidatos inscritos na vaga: " + candidatosInscritos
    );}else
    {
        alert("A vaga não existe!")
    }

    
}

function ListaVagas()
{
    for(; i < vagasDisponiveis.length; i++){

        let vagaEscolhida = vagasDisponiveis[i];
        let candidatosTodos = "";

        for(let j = 0; j < vagaEscolhida.candidatos.length; j++)
            {
                candidatosTodos += "\nCandidato " + (j+1) + ": " + vagaEscolhida.candidatos[j];
            }

        alert("Vaga: " + vagaEscolhida.nome + 
            "\nIndice: " + (i) + //fazer  o mesmo no mostravaga(), trocar o segundo i pra j
            "\nDescrição da vaga: " + vagaEscolhida.descricao +
            "\nData limite para se inscrever: " + vagaEscolhida.data +
            "\nNúmero de candidatos inscritos na vaga: " + vagaEscolhida.candidatos.length +
            "\nCandidatos inscritos na vaga: " + candidatosTodos
        );
        
        
    }
}

function ExcluirVaga()
{
    console.log(vagasDisponiveis);
    let qualExcluir = prompt("Qual o indice da vaga que você quer excluir?");
    let vagaPExcluir = vagasDisponiveis[qualExcluir]
    let confirmarExlusao = prompt("Nome da vaga: " + vagaPExcluir.nome +
        "\nDescrição da vaga: " + vagaPExcluir.descricao +
        "\nData do término de inscrição pra vaga: " + vagaPExcluir.data
        + "\n\nVocê tem certeza que quer excluir essa vaga?(sim/não)");
    if(confirmarExlusao){
    alert("Vaga excluida!")
    vagasDisponiveis.splice(qualExcluir, 1);
    }else{
        alert("Exclusão cancelada!");
    }

    console.log(vagasDisponiveis);
}

function Candidatar()
{
    let nomeCandidato = prompt("Qual o nome completo do candidato?");
    let indiceVagaCandidato = prompt("Qual o indice da vaga em que quer inscrever " + nomeCandidato + ":");
    vagasDisponiveis[indiceVagaCandidato].candidatos.push(nomeCandidato);
    //exibir uma confirmação
}
