const formulario = document.querySelector("form")
const resultado = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {
    const campokg = formulario.campokg.value
    const totalGrama = formulario.totalGrama.value
    const resul = (totalGrama * campokg) / 1000
    resultado.innerText = `R$ ${resul}`


    e.preventDefault()
})

