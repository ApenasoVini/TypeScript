"use strict";
//String
let nome = 'Vini';
console.log(nome);
//Number
let idade = 16;
console.log(idade);
//Boolean
let menor = true;
console.log(menor);
//Array
let lista = ["Maçã", "Banana"];
lista = [100, 400];
console.log(lista);
//Tuplas
let endereco = ["Av Principal", 99];
endereco = ["Rua Secundária", 123];
console.log(endereco);
//Enums
var Etnia;
(function (Etnia) {
    Etnia[Etnia["Preto"] = 5] = "Preto";
    Etnia[Etnia["Branco"] = 6] = "Branco";
    Etnia[Etnia["Amarelo"] = 7] = "Amarelo";
    Etnia[Etnia["Pardo"] = 8] = "Pardo";
    Etnia[Etnia["Indigena"] = 9] = "Indigena";
})(Etnia || (Etnia = {}));
let minhaEtnia = Etnia.Preto;
console.log(minhaEtnia);
//Any
let carro = 'BMW';
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
function retornarNome() {
    return nome;
}
console.log(retornarNome());
function multiplicar(num1, num2) {
    return num1 * num2;
}
console.log(multiplicar(4, 5));
