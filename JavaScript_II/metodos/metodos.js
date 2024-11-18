let carro = 
{
    nome: "civic",
    ano: 97,
    pneus()
    {
        console.log("Os 4 pneus estão bons, o " + this.nome + " é incrível!");
    }
}

console.log(carro);
console.log(carro.nome);
carro.pneus();