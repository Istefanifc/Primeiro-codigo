formulario = document.querySelector(`form`)
resultado = document.querySelector(`h3`)

formulario.addEventListener("submit", (prev) => {
    prev.preventDefault()

    var numNumero1 = parseInt(formulario.num1.value)
    var numNumero2 = parseInt(formulario.num2.value)

    console.log(numNumero1);
    console.log(numNumero2);

    let numN1 = numNumero1
    var numN2 = numNumero2

    var numTemporario = numNumero1
    var numNumero1 = numNumero2
    var numNumero2 = numTemporario

    console.log(numNumero1);
    console.log(numNumero2);

})

