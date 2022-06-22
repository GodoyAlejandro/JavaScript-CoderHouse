
const conteiner = document.getElementById('conteiner')

let button = document.getElementById('btn')
button.onclick = () => {
        console.log('hola');
        // conteiner.classList.toggle('contenedor-dark')
        if(conteiner.className == 'contenedor-light'){
            return conteiner.className = 'contenedor-dark'
        }else if(conteiner.className = 'contenedor-dark'){
            return conteiner.className = 'contenedor-light'
        }
    }
