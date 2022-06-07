// let precioFinal = 0

// const montoIngresado = (precio, iva) => { precioFinal = parseInt(precio) * iva} 
// const mostrar = (mensaje) => {alert(mensaje);}

// montoIngresado(prompt('ingrese un numero'), 21)

// mostrar(precioFinal)
alert('bienvenidx, este es un cotizador de paginas web. A continuacion obtendra mas informacíon.')
alert('las paginas web se componen de 1 a 5 archivos HTML, 1 archivo CSS encargado del diseño y del responsive y 1 archivo JS que se encarga de darle funcionabilidad a la pagina entera.')

const calculo = (a,b,c,d,e) => (a+b+c+d+e)
const iva = i => i * (21 / 100)
const impuestoPais = iP => iP * (65 / 100)
const css = Css => Css * 400
const html = htmlPrecio => htmlPrecio *500
let js = 400

let valorHtml = parseInt(html(prompt('ingrese un numero')))
let valorCss = parseInt(css(prompt('responsive si o no ')))

let resultado = calculo(valorHtml,valorCss,iva(valorHtml),impuestoPais(valorHtml),js)
alert('este es tu presupuesto: ' + resultado)
