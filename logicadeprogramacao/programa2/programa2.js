const formulario = document.querySelector('form')
const media = document.querySelector('h3')

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero1 = parseInt(formulario.numero1.value)
    const numero2 = parseInt(formulario.numero2.value)
    const numero3 = parseInt(formulario.numero3.value)

    const resul = (numero1 + numero2 + numero3) / 3

    media.innerText = (`A média é de : ${resul}`)

    console.log(media);
})