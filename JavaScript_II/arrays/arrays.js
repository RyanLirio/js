let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

//push adiciona no inicio
arr.push("Adicionei com push");
//aqui estou salvando o novo tamanho da lista em uma variavel
let novoTamanho = arr.push("Adicionei com push");
console.log(arr);
console.log(novoTamanho);

//unshift adiciona no inicio
arr.unshift("Adicionei com unshift")
console.log(arr);

//pop retira e pode armazenar o elemento retirado
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento)

//shift retira no inicio do array
arr.shift();
console.log(arr);

//só pesquisa se tem e devolve true ou false
let pesquisarSeTem = arr.includes(3);
console.log(pesquisarSeTem);

//pesquisa se tem e devolve o indice
let indiceDe = arr.indexOf(3);
console.log(indiceDe);

//cortar e concatenar
//slice
let doUmAoQuatro = arr.slice(0, 4);
console.log(doUmAoQuatro);
