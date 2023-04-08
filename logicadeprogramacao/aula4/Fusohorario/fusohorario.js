const formulario = document.querySelector("form")
const horas = document.querySelector("h1")



formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    var horaSelecionada = formulario.Brasil.valueAsDate;

    var horaCorrigida = new Date();
    horaCorrigida.setHours(horaSelecionada.getHours() + 3);
    horaCorrigida.setMinutes(horaSelecionada.getMinutes());

    const radio = document.querySelector('input[name="hr"]:checked');

    switch (radio.id) {
        case "Londres":
            horaCorrigida.setHours(horaCorrigida.getHours() + 3)
            break;
        case "Roma":
            horaCorrigida.setHours(horaCorrigida.getHours() + 4)
            break;
        case "Miami":
            horaCorrigida.setHours(horaCorrigida.getHours() - 1)
            break;
        case "LosAngeles":
            horaCorrigida.setHours(horaCorrigida.getHours() - 4)
            break;

        default:
            break;
    }

    horas.innerText = `São ${horaCorrigida.getHours()}:${horaCorrigida.getMinutes()}`

})