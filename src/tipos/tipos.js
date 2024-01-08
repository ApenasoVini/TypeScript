"use strict";
// //String
// let nome: string = 'Vini'
// console.log(nome)
// //Number
// let idade: number = 16
// console.log(idade)
// //Boolean
// let menor: boolean = true
// console.log(menor)
// //Array
// let lista: any[] = ["Maçã", "Banana"]
// lista = [100, 400]
// console.log(lista)
// //Tuplas
// let endereco: [string, number] = ["Av Principal", 99]
// endereco = ["Rua Secundária", 123]
// console.log(endereco)
// //Enums
// enum Etnia {
//     Preto = 5,
//     Branco,
//     Amarelo,
//     Pardo,
//     Indigena
// }
// let minhaEtnia: Etnia = Etnia.Preto
// console.log(minhaEtnia)
// //Any
// let carro: any = 'BMW'
// carro = { marca: 'BMW', ano: 2019 }
// console.log(carro)
//Funções
// function multiplicar(n1: number, n2: number): number {
//     return n1 * n2
// }
// let calculo: (x: number, y: number) => number
// calculo = multiplicar
// console.log(calculo(2, 5))
// Objetos
// let usuario: { nome: string, idade: number } = {
//     nome: 'xxx',
//     idade: 0
// }
// console.log(usuario)
//Never 
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Maçã',
    preco: 10,
    validacao() {
        if (this.nome.trim().length == 0 || !this.nome) {
            falha('Precisa ter um nome!');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validacao();
