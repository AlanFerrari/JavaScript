const modoNoturno = 'dark-mode';

function mudarModo(){
    mudarClasses();
    mudarTextos();
}

function mudarClasses(){
    button.classList.toggle(modoNoturno);
    h1.classList.toggle(modoNoturno);
    body.classList.toggle(modoNoturno);
    footer.classList.toggle(modoNoturno);
}

function mudarTextos(){
    const ligthMode = 'Ligth Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(modoNoturno)){
        button.innerHTML = ligthMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = ligthMode + ' ON';
}

const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', mudarModo);