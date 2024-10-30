let encerrar = 0
let escolha = ""
let fazerOque = ""
do{
    escolha = prompt ("Qual opção deseja selecionar?\n" +
        "1 - Página inicial\n" +
        "2 - Redes\n" +
        "3 - Contato\n" +
        "4 - Sobre nós\n" +
        "5 - Encerrar sessão"
    )

    switch(escolha)
    {
        case "1":
            fazerOque = "Página inicial"
            break
        case "2":
            fazerOque = "Redes"
            break
        case "3":
            fazerOque = "Contato"
            break
        case "4":
            fazerOque = "Sobre nós"
            break
        case "5":
            alert ("O sistema está sendo encerrado..")
            encerrar = 1
            break
        default:
            break

    }
    alert (fazerOque)


}while(encerrar == 0)