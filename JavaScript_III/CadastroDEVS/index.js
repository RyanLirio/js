let pessoas = [];
function experiencia(ev)
{   
    ev.preventDefault()
    console.log('hahaha')
    const xp = document.getElementById('form2');

    const listona = document.createElement('ul')
    const lista = document.createElement('li')

    const nomeTec = document.createTextNode('Nome da tecnologia: ')
    
    const tecnologia = document.createElement('input');
    tecnologia.type = 'text';
    tecnologia.name= 'tecnologiaNome';
    tecnologia.autocomplete = 'off'

    const xpTec = document.createTextNode('Tempo de experiência: ')

    const pularLinha = document.createElement('br')

    const valorOpcoesXPTEC1 = criarRadioOption('0-2 anos', 'ate-2-anos', 'experiencia');
    const valorOpcoesXPTEC2 = criarRadioOption('3-4 anos', '3-4-anos', 'experiencia')
    const valorOpcoesXPTEC3 = criarRadioOption('5+ anos', '5-ou-mais-anos', 'experiencia')


    const botaoDAxp = document.createElement('button');
    botaoDAxp.name = 'botao-da-xp';
    botaoDAxp.textContent = 'Salvar'
    botaoDAxp.onclick = function()
    {
        const confirmacao = confirm('Você confirma as informações salvas?');
        if(confirmacao)
        {
            salvarInfo(tecnologia, 'experiencia');
            limparCampos(tecnologia, 'experiencia');
                 
        }
    };
    
    const botaoExcluirXP = document.createElement('button');
    botaoExcluirXP.name = 'botao-Excluir-XP';
    botaoExcluirXP.textContent = 'Excluir'
    botaoExcluirXP.onclick = function()
    {
        lista.remove();
        
    }
    
    
    lista.appendChild(nomeTec);
    lista.appendChild(tecnologia);
    lista.appendChild(pularLinha);
    lista.appendChild(document.createElement('br'));
    
    lista.appendChild(xpTec);
    
    lista.appendChild(valorOpcoesXPTEC1);
    lista.appendChild(valorOpcoesXPTEC2);
    lista.appendChild(valorOpcoesXPTEC3);

    lista.appendChild(document.createElement('br'))
    lista.appendChild(document.createElement('br'))
    lista.appendChild(botaoDAxp);

    lista.appendChild(botaoExcluirXP);


    listona.appendChild(lista);
    xp.appendChild(listona);
    //xp.appendChild(lista)
    
}

const button = document.getElementById('addTecnologia');

button.addEventListener('click', experiencia)

function salvarInfo(tecnologiaInput, radioGroupName) {
    const nome = document.getElementById('name').value;
    const nomeTec = tecnologiaInput.value;

    const radios = document.getElementsByName(radioGroupName);
    let experiencia = null;
    for (const radio of radios) {
        if (radio.checked) {
            experiencia = radio.value;
            break;
        }
    }

    if (!nome || !nomeTec || !experiencia) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const novaPessoa = {
        nome: nome,
        tecnologia: nomeTec,
        experiencia: experiencia,
    };

    pessoas.push(novaPessoa);
    console.log('Nova pessoa adicionada:', novaPessoa);
    console.log('Lista de pessoas:', pessoas);
}
    
function criarRadioOption(labelText, id, groupName) {
    const container = document.createElement('span');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.id = id;
    radio.name = groupName;
    radio.value = labelText;

    const label = document.createTextNode(labelText);

    container.appendChild(radio);
    container.appendChild(label);
    return container;
}

function limparCampos(tecnologiaInput, radioGroupName)
{
    tecnologiaInput.value = '';

    const radios = document.getElementsByName(radioGroupName);
    for (const radio of radios) {
        radio.checked = false;
    }
}


console.log(pessoas)