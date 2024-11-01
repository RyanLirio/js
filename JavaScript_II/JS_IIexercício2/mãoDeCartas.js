let maoInicial = [];

let partida = true;

while(partida)
{
    let decisao = prompt("Mão: " + maoInicial + "\n" +
        "Você precisa:\n" +
        "1 - Adicionar uma carta\n" +
        "2 - Puxar uma carta\n" +
        "0 - Finalizar o jogo"
    );

    switch(decisao)
    {
        case "1":
            let cartaAdd = prompt("Qual o nome da carta?");
            maoInicial.unshift(cartaAdd);
            break;
        case "2":
            let cartaJogada = maoInicial.shift();
            if(!cartaJogada)
            {
                alert("Você não tem nenhuma carta")
            }else{
                alert("Carta jogada: " + cartaJogada);
            }
            break;
        case "0":
            partida = false;
            break;
        default:
            break;
    }
}