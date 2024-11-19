function escalacao()
{
    const posicao = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value
    
    console.log({posicao, name, number})
    const confirmacao = confirm(posicao + ": " + name + " (" + number + ")");

    
    if(confirmacao)
    {
        const time = document.getElementById('team');
        //const listaJogadores = document.createElement('ul');

        const jogadorCadastrado = document.createElement('li');
        jogadorCadastrado.id = 'player-' + number;
        jogadorCadastrado.textContent = (posicao + ": " + name + " (" + number + ")");;
    
        //listaJogadores.appendChild(jogadorCadastrado);
        time.appendChild(jogadorCadastrado);

        document.getElementById('position').value = '';
        document.getElementById('name').value = '';
        document.getElementById('number').value = '';
        
    }
    
}

function excluir()
{
    const numeroCamisa = document.getElementById('numjogador').value
    console.log(numeroCamisa)
    const jogadorARemover = document.getElementById('player-' + numeroCamisa);

    const confirmation = confirm('Remover o jogador' + jogadorARemover.innerText + '?')
    if(confirmation)
    {
        jogadorARemover.remove();
        //document.getElementById('team').removeChild(jogadorARemover)
        document.getElementById('numjogador').value = ''
    }
    
}