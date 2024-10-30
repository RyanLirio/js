let saldo = Number(prompt("Qual o saldo dísponivel na conta?"))
let acao = ""

while (saldo != null) 
{
    acao = prompt("Saldo disponivel: " + saldo + "\n1 - Adicionar dinheiro" + "\n2 - Retirar dinheiro" + "\n3 - Sair")
    switch (acao) {
        case "1":
            let adicionar = Number(prompt("Quanto deseja adicionar?"))
            saldo += adicionar
            break;
        case "2":
            let sacar = Number(prompt("Quanto deseja sacar?"))
            saldo -= sacar
            break
        case "3":
            saldo = null
            break
        default:
            break;
    }
}