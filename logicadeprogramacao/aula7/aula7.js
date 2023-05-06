const formulario = document.querySelector('form')
const resultado = document.querySelector('h3')

formulario.addEventListener("submit", (prev) => {
    prev.preventDefault()

    //prev a mesma coisa do "e" que eu usava antes.previnir que a tela fique no loading o tempo todo

    var aluno1 = parseInt(formulario.aluno1.value)
    var aluno2 = parseInt(formulario.aluno2.value)
    var aluno3 = parseInt(formulario.aluno3.value)

    const media = calcularMedia(aluno1, aluno2, aluno3)

    if (aluno1 > 10) {
        alert("O valor nao pode ser maior que 10")
        return
    }


    // TERNARIO
    media >= 5 ? aprovado(media) : reprovado(media);


    // IF ELSE
    // if (media >= 5) {
    //     console.log("aluno passou");
    //     resultado.innerText = (`Aluno passou ${media}`)
    // } else {
    //     console.log("aluno reprovou");
    //     resultado.innerText = (`Aluno reprovou ${media}`)
    // }


})


function aprovado(media) {
    console.log("aluno passou");
    resultado.innerText = (`Aluno passou ${media}`)
}

function reprovado(media) {
    console.log("aluno reprovou");
    resultado.innerText = (`Aluno reprovou ${media}`)
}



function calcularMedia(aluno1, aluno2, aluno3) {
    const mediaRes = (aluno1 + aluno2 + aluno3) / 3
    return mediaRes
}



