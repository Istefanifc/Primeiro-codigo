const numNumero1 = Number(prompt("DIGITE O PRIMEIRO NUMERO"))
const numNumero2 = Number(prompt("DIGITE O SEGUNDO NUMERO"))
const numNumero3 = Number(prompt("DIGITE O TERCEIRO NUMERO"))
const numNumero4 = Number(prompt("DIGITE O QUARTO NUMERO"))


console.log("iniciando programa");

if (numNumero1 <= numNumero2 && numNumero1 <= numNumero3 && numNumero1 <= numNumero4) {
    console.log(numNumero1);
    alert(`O menor numero é ${numNumero1}`)

} else if (numNumero2 <= numNumero1 && numNumero2 <= numNumero3 && numNumero2 <= numNumero4) {
    console.log(numNumero2);
    alert(`O menor numero é ${numNumero2}`)

} else if (numNumero3 <= numNumero1 && numNumero3 <= numNumero2 && numNumero3 <= numNumero4) {
    console.log(numNumero3);
    alert(`O menor numero é ${numNumero3}`)

} else if (numNumero4 <= numNumero1 && numNumero4 <= numNumero2 && numNumero4 <= numNumero3) {
    console.log(numNumero4);
    alert(`O menor numero é ${numNumero4}`)
}


