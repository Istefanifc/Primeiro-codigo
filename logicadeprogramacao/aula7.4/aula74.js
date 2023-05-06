let vetAnos = [];
let vetIdade = [];

for (i = 0; i <= 4; i = i + 1) {

    vetAnos[i] = prompt("Digite o ano de nascimento[" + i"]")
}


for (i = 0; i <= 4; i = i + 1) {

    vetAnos[i] = 2023 - vetAnos[i];

}

for (i = 0; i <= 4; i = i + 1) {

console.log("Ano de nascimento"+ vetAnos[i]+ "idade" +vetIdade);

}



