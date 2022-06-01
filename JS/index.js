let submit = document.getElementById('submit')
submit.onclick = multiplicador

function multiplicador (){
    for (let i = 1 ; i <= 10 ; i++) {
        let valorNumero = document.getElementById('valor-numero').value;
        
        document.querySelector('p').innerHTML +=  '<li>' + (i* valorNumero) + '</li>' ;
    }
}

