let filaInicial = ["João", "Pedro"];
let expediente = true;

while(expediente)
{   
    let paciente = "";
    console.log("Lista de espera")
    for (let posição = 0; posição < filaInicial.length; posição++) {
        paciente += (posição +1) + " º " + filaInicial[posição] + "\n";
        console.log(paciente);
    }
    let menu = prompt("Lista de espera\n" +
        paciente + "\n" +
        "Digite o numero da opção que deseja:\n"+
        "1 - Se consultar\n2 - Consultar paciente\n0 - Sair"
    )
    switch(menu)
    {
        case "1":
            let novoPaciente = prompt("Qual o nome do paciente?")
            filaInicial.push(novoPaciente)
            break;
        case "2":
            let nomeConsultado = filaInicial.shift()
            if(typeof nomeConsultado == "string")
            {
                alert(nomeConsultado + " foi consultado!\n")
            }else{
                alert("A fila de pacientes está vazia!")
            }
            break;
        case "0":
            alert ("Lista de espera:\n" + paciente);
            expediente = false;
            break;
        default:
        break;
    }
    
    
}