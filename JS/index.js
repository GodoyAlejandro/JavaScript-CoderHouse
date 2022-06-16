
alert('bienvenidx, este es un cotizador de paginas web. A continuacion obtendra mas informacíon.')

alert('En este cotizador iras seleccionando las paginas para HTML, las pantallas que se busca adaptar con el responsive y cuantos modulos se desea para darle funcionabilidad a la pagina')

//class para crear el producto
class Product {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }    
}

const HTML = new Product('HTML', 3500)
const Css = new Product('CSS', 2500)
const Javascript = new Product('JavaScript', 1200)

//array para mostrar los precios en dolares al final del simulador
let arrP = []
    arrP.push(HTML);
    arrP.push(Css);
    arrP.push(Javascript);

//mapear el contenido del array para cambiar efectivamente el contenido de precio
const dolar = arrP.map((D)=>{
    return{
        nombre: D.nombre,
        precio: Math.ceil(D.precio / 135)
    }
})
//uso el .find para separar los objetos del array 
//estos objetos se van a reflejados al final del codigo, mostrando el precio en usd
const htmlD = dolar.find((D) => D.nombre==='HTML');
const cssD = dolar.find((D) => D.nombre==='CSS');
const javaScriptD = dolar.find((D) => D.nombre==='JavaScript')

// crea el calculo individual de cada producto por la cantidad que indique el usuario con el prompt
class details {
    constructor(product, amount){
        this.product= product;
        this.amount = amount;
    }
    calcPrice(){
        let separatePrice = this.product.precio * this.amount;
        return separatePrice;
    }
}

const detailP1 = new details(HTML, parseInt(prompt('ingrese la cantidad de paginas que desea (por el momento, estas no pueden ser mayor a 5')))
    while(detailP1.amount === 0 || detailP1.amount > 5){
        detailP1.amount = parseInt(prompt('por favor, ingrese una cantidad correspondiente'))
    }

const detailP2 = new details(Css, parseInt(prompt('ingrese la cantidad de pantallas que desea adaptar en su pagina (por el momento, las pantallas a adaptar no pueden superar las 6')))
    while(detailP2.amount === 0 || detailP2.amount > 6){
        detailP2.amount = parseInt(prompt('por favor, ingrese una cantidad correspondiente'))
    }

const detailP3 = new details(Javascript, parseInt(prompt('ingrese la cantidad de modulos que desea que tenga su pagina (por el momento, estos modulos no pueden superar los 3')))
    while(detailP3.amount === 0 || detailP3.amount > 3){
        detailP3.amount = parseInt(prompt('por favor, ingrese una cantidad correspondiente'))
    }

//creo un array donde junto solo los precios de los objetos details para sumarlos con el metodo reduce
let arrD = [];
    arrD.push(detailP1.calcPrice());
    arrD.push(detailP2.calcPrice());
    arrD.push(detailP3.calcPrice());

//metodo reduce para concatenar todos los precios
const total = arrD.reduce((a,b) => a + b, 0);

function iva(i){
    i= i * 1.21;
    return i
}

//copia para mostrar los precios en usd
let arrDolarP = [];
    arrDolarP.push(Math.ceil(detailP1.calcPrice() / 135));
    arrDolarP.push(Math.ceil(detailP2.calcPrice() / 135));
    arrDolarP.push(Math.ceil(detailP3.calcPrice() / 135));

const totD = arrDolarP.reduce((a,b) => a+b, 0);

function ivaD(i){
    i*= 1.21;
    return i
}

alert(`presupuesto completo:
       \n ${HTML.nombre}-----precio x pagina= ${HTML.precio}ARS/${htmlD.precio}USD
       \n -------------------precio x ${detailP1.amount} pagina/s= ${detailP1.calcPrice()}ARS/${arrDolarP[0]}USD
       \n ${Css.nombre}-----precio x pagina= ${Css.precio}ARS/${cssD.precio}USD
       \n -------------------precio x ${detailP2.amount} pagina/s= ${detailP2.calcPrice()}/${arrDolarP[1]}USD
       \n ${Javascript.nombre}-----precio x pagina= ${Javascript.precio}ARS/${javaScriptD.precio}USD
       \n -------------------precio x ${detailP3.amount} pagina/s= ${detailP3.calcPrice()}ARS/${arrDolarP[2]}USD
       \n total sin iva = ${total}ARS/${totD}USD
       \n total con iva = ${iva(total)}ARS/${ivaD(totD)}USD`)
      
