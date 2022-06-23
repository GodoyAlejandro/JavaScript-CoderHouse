
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

const inNombre = document.getElementById('nombre');
const inApellido = document.getElementById('apellido');
const inEdad = document.getElementById('edad');
const selPais = document.getElementById('pais');
console.log(selPais.index)

const div = document.createElement('div');

const main = document.querySelector('#conteiner main')

let formulario = document.getElementById('formulario')
    formulario.addEventListener("submit", (validar) => {
        validar.preventDefault();
        div.innerHTML = `<p>tu nombre es ${inNombre.value} </p>
        <p>tu apellido es ${inApellido.value}</p>
        <p> tu edad es ${inEdad.value}</p>
        <p> naciste en ${selPais.options[selPais.selectedIndex].text}`
        main.appendChild(div);
    });
    


// let miFormulario = document.getElementById('formulario');
// miFormulario.addEventListener('submit', validarFormulario);

// function validarFormulario(e){
//     e.preventDefault();
//     console.log('formulario enviado');
// }