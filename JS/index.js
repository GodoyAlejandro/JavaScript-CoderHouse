alert('bienvenidx, este es un cotizador de paginas web. A continuacion obtendra mas informacíon.')
alert('las paginas web se componen de 1 a 5 archivos HTML, 1 archivo CSS encargado del diseño y del responsive y 1 archivo JS que se encarga de darle funcionabilidad a la pagina entera.')

const calculo = (vHTML, vCSS, iVA, impPais, vJs) => (vHTML + vCSS + iVA + impPais + vJs)
const iva = i => i * (21 / 100)
const impuestoPais = iP => iP * (65 / 100)
const css = Css => { return parseInt(Css * 2500)}
const html = htmlPrecio => htmlPrecio * 2500
let js = 7000

function presupuestario (){
    let valorHtml = parseInt(html(prompt('ingrese el numero de paginas HTML que desea agregar a su pagina, recuerde que esta acepta valores del 1 al 5')))
while ((valorHtml > 12500) ){
    alert('por favor, introduzca una cantidad adecuada')
    valorHtml = parseInt(html(prompt('ingrese el numero de paginas HTML que desea agregar a su pagina, recuerde que esta acepta valores del 1 al 5')))
    continue
}

let valorCss = parseInt(css(prompt('para añadir responsive introduzca 1 = (no). 2 = (si)')))
while ((valorCss > 5000) ){
    alert('por favor, introduzca una cantidad adecuada')
    valorCss = parseInt(css(prompt('para añadir responsive introduzca 1 = (no). 2 = (si)')))
    continue
}

let resultado = calculo(valorHtml,valorCss,iva(valorHtml),impuestoPais(valorHtml),js)

alert('aqui esta su presupuesto:' + ('\nprecio de html...'+valorHtml) + ('\nprecio de css...'+valorCss) + ('\nprecio de Javascript...'+js) + ('\nimpuesto pais...'+impuestoPais(valorHtml)) + ('\niva...'+iva(valorHtml)) + ('\nprecio total...'+resultado+'USD'))
} 

function despedida(){
    let des = prompt('desea volvera iniciar el presupuestario? (si) (no)')
    if(des=="si"){
        alert('ok, el presupuestario sera reiniciado para que pueda ingresar nuevamente los datos requeridos')
        presupuestario()
        
    }else if (des=="no"){
        alert('gracias por utilizar nuestro presupuestario, que tenga buen dia')
    }
    else{
        alert('por favor, ingrese una de las opciones marcadas')
        despedida()
    }
}

presupuestario()
despedida()