let loop = true;
let base = 0;
let altura = 0;
let lado = 0;
let baseMaior = 0;
let baseMenor = 0;
let pi = 3.14;
let raio = 0;

    do{
    let option = prompt("Calculadora Geométrica\n" +
        "Escolha qual operação deseja realizar:\n" +
        "Digite 1 para calcular -> Área do triângulo\n" +
        "Digite 2 para calcular -> Área do retângulo\n" +
        "Digite 3 para calcular -> Área do quadrado\n" +
        "Digite 4 para calcular -> Área do trapézio\n" +
        "Digite 5 para calcular -> Área do circulo\n" +
        "Digite 0 para sair"
    );

    switch(option)
    {
        case "1":
            alert("Área do triângulo: " + areaTriangulo());
            break;
        case "2":
            alert("Área do retângulo: " + areaRetangulo());
            break;
        case "3":
            alert("Área do quadrado: " + areaQuadrado());
            break;
        case "4":
            alert("Área do trapézio: " + areaTrapezio());
            break;
        case "5":
            alert("Área do circulo: " + areaCirculo());
            break;
        case "0":
            alert("Encerrando...")
            loop = false;
            break;
        default:
            alert("Opção inválida!");
            break;
        
    }
}while(loop != false)

function areaTriangulo()
{
    return areaRetangulo() / 2;
}

function areaRetangulo()
{
    base = prompt("Qual a medida da base?");
    altura = prompt("Qual a altura?");
    return base * altura;
}

function areaQuadrado()
{
    lado = prompt("Qual é a medida dos lados do quadrado?");
    return lado*lado;
}

function areaTrapezio()
{
    baseMaior = parseFloat(prompt("Qual a medida da base maior?"));
    baseMenor = parseFloat(prompt("Qual a medida da base menor?"));
    altura = prompt("Qual a altura do trapézio?");
    return (baseMaior + baseMenor) * altura/2;
}

function areaCirculo()
{
    raio = prompt("Quanto mede o raio do circulo?");
    return pi * (raio*raio);
}