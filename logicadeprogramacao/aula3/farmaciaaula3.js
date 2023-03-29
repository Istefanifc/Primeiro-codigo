const formulario = document.querySelector("form")
const desconto = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const valordaunidade = formulario.valordaunidade.value
    const porcentagemdodesconto = formulario.porcentagemdodesconto.value

    const totalpagar = (valordaunidade * porcentagemdodesconto) / 100
    desconto.innerText = `R$ ${totalpagar}`


})