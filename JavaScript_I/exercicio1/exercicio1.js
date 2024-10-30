const nome = prompt ("Qual seu nome?")
const sobrenome = prompt ("Qual seu sobrenome?")
const estudo = prompt ("Qual sua área de estudo?")
const anoDeNacimento = prompt ("Qual seu ano de nascimento?")

alert ("Nome: "+ nome + " " + sobrenome +
    "\nÁrea de estudo: " + estudo +
    "\nIdade: " + ("\n" + 2024 - anoDeNacimento)
)