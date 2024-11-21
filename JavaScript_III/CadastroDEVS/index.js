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

    const valorOpcoesXPTEC1 = document.createTextNode('0-2 anos');
    valorOpcoesXPTEC1.id = 'ate-2-anos'
    const opcoesXPTEC1 = document.createElement('input');
    opcoesXPTEC1.type = 'radio'
    opcoesXPTEC1.id = 'ate-2-anos'

    const valorOpcoesXPTEC2 = document.createTextNode('3-4 anos');
    valorOpcoesXPTEC2.id = '3-4-anos'
    const opcoesXPTEC2 = document.createElement('input');
    opcoesXPTEC2.type = 'radio'
    opcoesXPTEC2.id = '3-4-anos'

    const valorOpcoesXPTEC3 = document.createTextNode('5+ anos');
    valorOpcoesXPTEC3.id = '5-ou-mais-anos'
    const opcoesXPTEC3 = document.createElement('input');
    opcoesXPTEC3.type = 'radio'
    opcoesXPTEC3.id = '5-ou-mais-anos'

    const botaoDAxp = document.createElement('button');
    botaoDAxp.name = 'botao-da-xp';
    botaoDAxp.textContent = 'Salvar'
    
    const botaoExcluirXP = document.createElement('button');
    botaoExcluirXP.name = 'botao-Excluir-XP';
    botaoExcluirXP.textContent = 'Excluir'
    
    
    lista.appendChild(nomeTec);
    lista.appendChild(tecnologia);
    lista.appendChild(pularLinha);
    lista.appendChild(document.createElement('br'));
    
    lista.appendChild(xpTec);
    
    lista.appendChild(opcoesXPTEC1);
    lista.appendChild(valorOpcoesXPTEC1);

    lista.appendChild(opcoesXPTEC2);
    lista.appendChild(valorOpcoesXPTEC2);

    lista.appendChild(opcoesXPTEC3);
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