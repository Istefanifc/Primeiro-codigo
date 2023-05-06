function lerVetor() {

    const numNumero1 = prompt(`Digite um numero: `)
    const numNumero2 = prompt(`Digite um numero:`)
    const numNumero3 = prompt(`Digite um numero:`)

    const numQualquer = [numNumero1, numNumero2, numNumero3]
    return numQualquer
}

const meuNumero1 = lerVetor()
const meuNumero2 = lerVetor()
const meuNumero3 = lerVetor()



function menor(meuNumero) {

    if (meuNumero[0] <= meuNumero[1] && meuNumero[0] <= meuNumero[2]) {

        return (meuNumero[0]);

    }
    else if (meuNumero[1] <= meuNumero[0] && meuNumero[1] <= meuNumero[2]) {
        return (meuNumero[1]);
    }
    else if (meuNumero[2] <= meuNumero[1] && meuNumero[2] <= meuNumero[0]) {
        return (meuNumero[2]);
    }
}
console.log(menor(meuNumero1));
console.log(menor(meuNumero2));
console.log(menor(meuNumero3));

