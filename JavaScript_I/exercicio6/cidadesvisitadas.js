const nome = prompt ("Qual seu nome?")
let visitouCidades = prompt (nome + " você já visitou alguma cidade? (sim ou não)")
let nomeCidade = " "
let i = 0

while(visitouCidades == "sim")
    {
        
        nomeCidade += prompt ("Qual cidade você já visitou?")
        nomeCidade += "\n"

        visitouCidades = prompt (nome + " você já visitou mais alguma cidade? (sim ou não)")
        i++
    }

alert (nome + " já visitou " + i + " cidades, sendo elas:\n" + nomeCidade)