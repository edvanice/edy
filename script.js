
function escrevendoletra(){
    function ativaletra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML  = '';
    arrTexto.forEach((letra,i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 75 * i)
    })       
    }   

    const titulo = document.querySelector('.digitando')
    ativaletra(titulo);
}


const ativaMenu = document.querySelector('.fa-bars')
const navMenu= Document.querySelector('header.navegacao-primaria')

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})