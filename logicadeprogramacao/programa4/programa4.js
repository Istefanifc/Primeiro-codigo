const formulario = document.querySelector('form')
const resultado = document.querySelector('h3')

formulario.addEventListener('submit', (e) => {

    e.preventDefault();
    var nome = formulario.nome.value
    var nota = formulario.nota.value

    if (nota >= 5) {
        resultado.innerText = `${nome}, Parabens vc passou`;
        resultado.style.color = "blue";
    }
    else if (nota >= 2 ) {
        resultado.innerText = `${nome}, Vc esta de recuperaçao`;
        resultado.style.color = "black";
        
    }
    else  {
        resultado.innerText = `${nome}, Reprovou`;
        resultado.style.color = "red";
    }

})