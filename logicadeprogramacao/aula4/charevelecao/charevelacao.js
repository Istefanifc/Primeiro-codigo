const formulario = document.querySelector("form")
const resultado = document.querySelector("p")
document.getElementById('Femenino').style.color = 'deeppink';
document.getElementById('Masculino').style.color = 'blue';

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const menina = formulario.Femenino.checked;
    const menino = formulario.Masculino.checked;



    if (menina) {
        resultado.innerText = `Parabéns é uma menina`
        resultado.style.color = "DeepPink"
    }
    else {
        resultado.innerText = `Parabéns é um ${"menino"}`
        resultado.style.color = "blue"
    }

})
