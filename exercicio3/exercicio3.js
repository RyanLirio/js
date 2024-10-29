const valorM = prompt("Qual valor, em metros deseja converter?")
const medidaConverter = prompt("Para qual medida deseja converter esse valor?\n Para milímetro digite - mm \n Para centímetro digite - cm \n Para decímetro digite - dm \n Para decâmetro digite - dam \n Para hectômetro digite - hm \n Para quilômetro digite - km")

switch(medidaConverter)
{
    case "mm":
        alert(valorM + "m = " + valorM*1000 + "mm")
        break
    case "cm":
        alert(valorM + "cm = " + valorM*100 + "cm")
        break
    case "dm":
        alert(valorM + "dm = " + valorM*10 + "dm")
        break
    case "dam":
        alert(valorM + "dam = " + valorM/10 + "dam")
        break
    case "hm":
        alert(valorM + "hm = " + valorM/100 + "hm")
        break
    case "km":
        alert (valorM + "m = " + valorM/1000 + "km")
        break
    default:
    alert("Opção inválida")
}
