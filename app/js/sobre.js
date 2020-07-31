const { ipcRenderer, shell } = require('electron');
const process = require('process');

let linkFechar = document.querySelector("#link-fechar");
let versaoSistema = document.querySelector("#versao-sistema");

window.onload = ()=>{
    versaoSistema.textContent = process.env.npm_package_version
}

linkFechar.addEventListener('click', ()=>{
    ipcRenderer.send('fechar-janela-sobre')
})


let linkLinkedin = document.querySelector('#link-linkedin');

linkLinkedin.addEventListener('click', ()=>{
    shell.openExternal("https://www.linkedin.com/in/c%C3%A1ssio-fernandes-1b3a34165/");
})