const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

document.querySelectorAll('.charKey').forEach(function(charKeyBtn)
{
    charKeyBtn.addEventListener('click', function()
    {
        const value = charKeyBtn.dataset.value;
        input.value += value;
    })
})

document.getElementById('clear').addEventListener("click", function()
{
    input.value = "";
    input.focus();
})


input.addEventListener('keydown', function(ev)
{
    ev.preventDefault();
    if(allowedKeys.includes(ev.key))//ve se a ev.key ou tecla digitada está dentro das permitidas(allowedkeys)
    {
        input.value += ev.key;
        return;
    }
    if(ev.key === 'Backspace')
    {
        input.value = input.value.slice(0, -1);
    }
    if(ev.key === 'Enter')
    {
        calculate();
    }

})
document.getElementById('equal').addEventListener('click', calculate);

function calculate()
{
    const result = eval(input.value);//eval efetua o calculo //tomar cuidado ao usar pois pode ser abertura para usuários mal intencionados
    resultInput.value = result;
}//falta tratar erros

document.getElementById('themeSwitcher').addEventListener('click', function()
{
    if(main.dataset.theme === 'dark')
        {
            root.style.setProperty('--bg-color', 'f1f5f9');
            root.style.setProperty('--border-color', '#aaa');
            root.style.setProperty('--font-color', '#212529');
            root.style.setProperty('--primary-color', '#26834a');

            main.dataset.theme = 'light';
        }else
        {
            root.style.setProperty('--bg-color', '#212529');
            root.style.setProperty('--border-color', '#aaa');
            root.style.setProperty('--font-color', '#f1f5f9');
            root.style.setProperty('--primary-color', '#26834a');

            main.dataset.theme = 'dark';
        }
})

document.getElementById('copyToClipboard').addEventListener('click', function(ev)
{
    const button = ev.currentTarget;
    if(button.innerText === 'Copiar')
        {
            button.innerText = 'Copiado';
            button.classList.add('success');
            navigator.clipboard.writeText(resultInput.value);
        }else
        {
            button.innerText = 'Copiar';
            button.classList.remove('success')
        }
})