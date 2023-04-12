const formulario = document.querySelector("form")
const money = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    var saque = parseInt(formulario.valor.value)
    var qtdNota100 = 0
    var qtdNota50 = 0
    var qtdNota10 = 0

    if (saque < 10) {
        alert(`ERRO AO SACAR R$ ${saque}`)
    }

    if (saque > 100) {
        var resto100 = saque % 100
        qtdNota100 = Math.floor(saque / 100)
        console.log(qtdNota100);
    }
    if (resto100 >= 50) {
        var resto50 = resto100 % kjiiqtdNota50 = Math.floor((saque - resto100) / 50)
        console.log(qtdNota50);
    }

    if (resto50 > 10) {
        const resto10 = resto50 % 10
        qtdNota10 = Math.floor(saque / 10)
        console.log(qtdNota10);
    }

    money.innerText = `Quantidade de notas de dez ${qtdNota10}, Quantidade de notas de cinquenta ${qtdNota50}, Quantidade de notas de cem ${qtdNota100}`
})


