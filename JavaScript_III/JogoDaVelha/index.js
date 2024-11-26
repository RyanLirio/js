let jogador1 = "";
let jogador2 = "";
let jogadorDaVez = "";
let tabuleiro = [
    ["", "", ""], // Linha 1
    ["", "", ""], // Linha 2
    ["", "", ""]  // Linha 3
];


document.getElementById('start').addEventListener('click', function(ev)
{
    jogador1 = prompt('Qual é o apelido do jogador 1?');
    jogador2 = prompt('Qual é o apelido do jogador 2?');
    jogadorDaVez = prompt('Qual jogador iniciará jogando? ' + jogador1 + ' ou ' + jogador2 +'?');

    let p1 = document.getElementById('adversario1');
    p1.innerText = jogador1;
    let p2 = document.getElementById('adversario2');
    p2.innerText = jogador2;

    const vdq = document.getElementById('vezDeQuem');
    vdq.innerText = jogadorDaVez;
    console.log(vdq.value)
})



document.querySelectorAll("button").forEach(function(botao) {
    botao.addEventListener("click", function(ev) {
        // Captura o botão clicado
        const botaoClicado = ev.currentTarget;

        // Ignora o botão com a classe "nao-alterar"
        if (botaoClicado.classList.contains("naoAlterar")) {
            return; // Sai da função e não muda o texto
        }
        if (botao.innerText !== "") {
            alert("Essa célula já foi preenchida!");
            return;
        }

        // Preenche a célula com o símbolo do jogador atual
        if (jogadorDaVez === jogador1) {
            botao.innerText = 'X';
            tabuleiro[botao.dataset.linha][botao.dataset.coluna] = 'X'; // Atualiza a posição no tabuleiro
        } else {
            botao.innerText = 'O';
            tabuleiro[botao.dataset.linha][botao.dataset.coluna] = 'O'; // Atualiza a posição no tabuleiro
        }

        // Alterna o jogador da vez
        jogadorDaVez = jogadorDaVez === jogador1 ? jogador2 : jogador1;

        // Atualiza o indicador de vez
        document.getElementById("vezDeQuem").innerText = `Vez do jogador: ${jogadorDaVez}`;

        // Verifica se há vencedor
        const vencedor = verificarVencedor();
        if (vencedor === 'X') {
            alert(jogador1 + " ganhou!");
            // Você pode desabilitar os botões ou reiniciar o jogo
        }
        if (vencedor === 'O') {
            alert(jogador2 + " ganhou!");
            // Você pode desabilitar os botões ou reiniciar o jogo
        }
    });
});

function verificarVencedor() {
    // Verificar linhas
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] !== "" && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]) {
            return tabuleiro[i][0]; // Retorna "X" ou "O"
        }
    }

    // Verificar colunas
    for (let j = 0; j < 3; j++) {
        if (tabuleiro[0][j] !== "" && tabuleiro[0][j] === tabuleiro[1][j] && tabuleiro[1][j] === tabuleiro[2][j]) {
            return tabuleiro[0][j]; // Retorna "X" ou "O"
        }
    }

    // Verificar diagonais
    if (tabuleiro[0][0] !== "" && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) {
        return tabuleiro[0][0]; // Retorna "X" ou "O"
    }

    if (tabuleiro[0][2] !== "" && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]) {
        return tabuleiro[0][2]; // Retorna "X" ou "O"
    }

    // Se não houver vencedor
    return null;
}
