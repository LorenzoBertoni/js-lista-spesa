let listaSpesa = ['pane', 'hamburgher', 'cetrioli', 'cheddar', 'insalata'];
let wrapperDom = document.getElementById('wrapper');
let i = 0;

while (i < listaSpesa.length) {
    wrapperDom.innerHTML += `<div class='item'>${listaSpesa[i]}</div>`
    i++
}

